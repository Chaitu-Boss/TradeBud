import React, { useEffect, useRef, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import axios from "axios";

const MAX_POINTS = 30;

const seedData = Array.from({ length: 10 }, (_, i) => ({
    time: `T-${10 - i}`,
    price: 1000 + i * 5,
}));

const LivePriceChart = ({ symbol }) => {
    const wsRef = useRef(null);
    const reconnectTimerRef = useRef(null);
    const [data, setData] = useState(seedData);

    useEffect(() => {
        if (!symbol) return;

        const connectWS = async () => {
            // close old socket
            if (wsRef.current) {
                wsRef.current.close();
                wsRef.current = null;
            }

            try {
                const ws = new WebSocket("ws://localhost:8080/api/market-data/");
                wsRef.current = ws;

                ws.onopen = async () => {
                    console.log("WS connected");

                    // send symbol AFTER connect
                    try {
                        await axios.post(
                            "http://localhost:8080/api/market-data/symbol",
                            { symbol }
                        );
                        console.log("Symbol sent:", symbol);
                    } catch (err) {
                        console.error("Failed to send symbol:", err);
                    }
                };

                ws.onmessage = (event) => {
                    const msg = JSON.parse(event.data);
                    if (msg.symbol !== symbol || !msg.ltp) return;

                    setData((prev) =>
                        [...prev, {
                            time: new Date().toLocaleTimeString(),
                            price: msg.ltp,
                        }].slice(-MAX_POINTS)
                    );
                };

                ws.onerror = (err) => {
                    console.error("WS error", err);
                };

                ws.onclose = () => {
                    console.log("WS closed"); // ❌ no reconnect
                };
            } catch (err) {
                console.error("WS init failed", err);
            }
        };

        connectWS();

        return () => {
            wsRef.current?.close(); // cleanup on reload/unmount
        };
    }, [symbol]);


    return (
        <div className="h-48 w-full mt-4 bg-black rounded-xl p-3 border border-white/10">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis
                        dataKey="time"
                        tick={{ fill: "#ffffff", fontSize: 10 }}
                        axisLine={{ stroke: "#ffffff" }}
                        tickLine={false}
                    />
                    <YAxis
                        tick={{ fill: "#ffffff", fontSize: 10 }}
                        axisLine={{ stroke: "#ffffff" }}
                        tickLine={false}
                        domain={["dataMin - 5", "dataMax + 5"]}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#000",
                            border: "1px solid white",
                            color: "white",
                        }}
                        labelStyle={{ color: "white" }}
                    />
                    <Line
                        type="monotone"
                        dataKey="price"
                        stroke="#ffffff"
                        strokeWidth={2.5}
                        dot={false}
                        isAnimationActive
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LivePriceChart;
