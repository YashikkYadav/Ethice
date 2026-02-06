import { useEffect, useState } from "react";

export default function LEIBadge({
  lei = "9845005D15B2KFLI6483",
  theme = "dark", // "dark" | "light"
}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false); // toggle state

  useEffect(() => {
    fetch(`https://api.gleif.org/api/v1/lei-records/${lei}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json.data.attributes);
      })
      .catch(() => setError(true));
  }, [lei]);

  if (error || !data) return null;

  const status = data.registration.status;
  const lastUpdated = new Date(
    data.registration.lastUpdateDate
  ).toLocaleDateString("en-GB");

  const isActive = status === "ISSUED";

  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        position: "fixed",
        bottom: 12,
        right: 15,
        zIndex: 999999,
        cursor: "pointer",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto",
        background:
          theme === "dark"
            ? "linear-gradient(135deg,#1f2937,#374151)"
            : "#ffffff",
        color: theme === "dark" ? "#ffffff" : "#1f2937",
        borderRadius: 10,
        padding: open ? "14px 18px" : "8px 12px",
        minWidth: open ? 260 : "auto",
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        border: theme === "dark" ? "1px solid #374151" : "1px solid #e5e7eb",
        transition: "all 0.25s ease",
      }}
    >
      {/* COLLAPSED VIEW */}
      {!open && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              backgroundColor: isActive ? "#22c55e" : "#ef4444",
            }}
          />
          LEI Verified
        </div>
      )}

      {/* EXPANDED VIEW */}
      {open && (
        <>
          <div style={{ fontSize: 18, fontWeight: 700 }}>Verified Entity</div>

          <div style={{ fontSize: 13, opacity: 0.85, marginTop: 4 }}>
            {data.entity.legalName.name}
          </div>

          <div style={{ marginTop: 10, fontSize: 12 }}>
            <strong>LEI:</strong>{" "}
            <a
              href={`https://search.gleif.org/#/record/${lei}`}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                color: "#22d3ee",
                textDecoration: "underline",
              }}
            >
              {lei}
            </a>
          </div>

          <div
            style={{
              marginTop: 8,
              fontSize: 12,
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: isActive ? "#22c55e" : "#ef4444",
              }}
            />
            Status: {status}
          </div>

          <div style={{ fontSize: 11, opacity: 0.75, marginTop: 4 }}>
            Last verified: {lastUpdated}
          </div>

          <div
            style={{
              fontSize: 10,
              opacity: 0.6,
              marginTop: 6,
            }}
          >
            Click to collapse
          </div>
        </>
      )}
    </div>
  );
}
