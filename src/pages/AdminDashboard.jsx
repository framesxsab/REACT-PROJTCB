import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
    const navigate = useNavigate();
    const [resources, setResources] = useState([]);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
        if (!isLoggedIn) navigate("/admin-login");
        const pending = JSON.parse(localStorage.getItem("pendingResources")) || [];
        setResources(pending);
    }, [navigate]);

    const handleApprove = (index) => {
        const pending = [...resources];
        const [resource] = pending.splice(index, 1);
        const approved = JSON.parse(localStorage.getItem("approvedResources")) || [];
        approved.push({ ...resource, status: "approved" });

        localStorage.setItem("approvedResources", JSON.stringify(approved));
        localStorage.setItem("pendingResources", JSON.stringify(pending));
        setResources(pending);
    };

    const handleReject = (index) => {
        const pending = [...resources];
        pending.splice(index, 1);
        localStorage.setItem("pendingResources", JSON.stringify(pending));
        setResources(pending);
    };

    const handleLogout = () => {
        localStorage.removeItem("isAdminLoggedIn");
        navigate("/admin-login");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-800 to-blue-400 text-white relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-cyan-900 via-blue-800 to-blue-300 opacity-80" style={{backgroundSize: '200% 200%'}} />
            <header className="relative z-10 bg-white/10 backdrop-blur-2xl border-b border-cyan-400/20 p-7 flex justify-between items-center shadow-2xl">
                <h1 className="text-3xl font-bold font-[Cinzel] bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">Admin Dashboard</h1>
                <button
                    onClick={handleLogout}
                    className="bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-700 text-white px-6 py-2 rounded-xl hover:from-cyan-400 hover:to-blue-800 transition-all duration-200 hover:scale-105 hover:shadow-lg font-semibold text-lg flex items-center gap-2 shadow-md"
                >
                    <span>Logout</span> <span>🚪</span>
                </button>
            </header>
            <main className="relative z-10 p-10">
                <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent font-[Cinzel] drop-shadow-lg">Pending Resources</h2>
                {resources.length === 0 ? (
                    <p className="text-lg text-cyan-100/80">No pending resources.</p>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {resources.map((resource, index) => (
                            <div key={index} className="relative bg-white/20 backdrop-blur-2xl p-8 rounded-3xl shadow-2xl hover:shadow-cyan-400/40 transition-all duration-300 group border border-cyan-400/20 animate-fadein" style={{animationDelay: `${index * 0.1}s`}}>
                                <h3 className="text-xl font-bold mb-2 text-cyan-100 font-[Cinzel]">{resource.title}</h3>
                                <p className="text-sm mb-1 text-cyan-200">
                                    <span className="font-semibold">Category:</span> {resource.category}
                                </p>
                                <p className="text-sm mb-1 text-cyan-200">
                                    <span className="font-semibold">Description:</span> {resource.description}
                                </p>
                                <p className="text-sm mb-4 text-cyan-200">
                                    <span className="font-semibold">Location:</span> {resource.location || "N/A"}
                                </p>
                                <div className="flex justify-end gap-4 mt-4">
                                    <button
                                        onClick={() => handleApprove(index)}
                                        className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white px-5 py-2 rounded-lg hover:from-green-500 hover:to-green-700 transition-all duration-200 flex items-center gap-2 font-semibold shadow-md hover:scale-105"
                                    >
                                        <span>Approve</span> <span>✔️</span>
                                    </button>
                                    <button
                                        onClick={() => handleReject(index)}
                                        className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white px-5 py-2 rounded-lg hover:from-red-500 hover:to-red-700 transition-all duration-200 flex items-center gap-2 font-semibold shadow-md hover:scale-105"
                                    >
                                        <span>Reject</span> <span>✖️</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
            <style>{`
                @keyframes gradient {
                  0% {background-position: 0% 50%;}
                  50% {background-position: 100% 50%;}
                  100% {background-position: 0% 50%;}
                }
                .animate-gradient { animation: gradient 12s ease-in-out infinite; }
                @keyframes fadein {
                  from { opacity: 0; transform: translateY(30px); }
                  to { opacity: 1; transform: none; }
                }
                .animate-fadein { animation: fadein 0.7s cubic-bezier(.4,0,.2,1) both; }
            `}</style>
        </div>
    );
}
