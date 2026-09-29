import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Esraa - AI Engineering student. RAG and LLM systems.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "#E6EAF3",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    fontFamily: "sans-serif",
                }}
            >
                {/* Accent bar */}
                <div
                    style={{
                        width: "60px",
                        height: "6px",
                        background: "#8559B1",
                        borderRadius: "3px",
                        marginBottom: "40px",
                    }}
                />
                <div
                    style={{
                        fontSize: "80px",
                        fontWeight: "500",
                        color: "#4A4D60",
                        lineHeight: 1.1,
                        marginBottom: "20px",
                    }}
                >
                    Esraa
                </div>
                <div
                    style={{
                        fontSize: "36px",
                        color: "#4A4D60",
                        opacity: 0.75,
                    }}
                >
                    AI Engineering student. RAG and LLM systems.
                </div>
            </div>
        ),
        { ...size }
    );
}
