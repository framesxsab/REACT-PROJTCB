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
        <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-indigo-600 text-white">
            <header className="bg-white/10 backdrop-blur-md border-b border-white/20 p-6 flex justify-between items-center">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <button
                    onClick={handleLogout}
                    className="bg-white/20 px-6 py-2 rounded-xl hover:bg-white/30"
                >
                    Logout
                </button>
            </header>
            <main className="p-8">
                <h2 className="text-2xl font-bold mb-6">Pending Resources</h2>
                {resources.length === 0 ? (
                    <p className="text-lg">No pending resources.</p>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {resources.map((resource, index) => (
                            <div key={index} className="bg-white/10 p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                                <p className="text-sm mb-1">
                                    <span className="font-semibold">Category:</span> {resource.category}
                                </p>
                                <p className="text-sm mb-1">
                                    <span className="font-semibold">Description:</span> {resource.description}
                                </p>
                                <p className="text-sm mb-4">
                                    <span className="font-semibold">Location:</span> {resource.location || "N/A"}
                                </p>
                                <div className="flex justify-end gap-4">
                                    <button
                                        onClick={() => handleApprove(index)}
                                        className="bg-green-500/60 px-4 py-2 rounded-lg hover:bg-green-500/80"
                                    >
                                        Approve
                                    </button>
                                    <button
                                        onClick={() => handleReject(index)}
                                        className="bg-red-500/60 px-4 py-2 rounded-lg hover:bg-red-500/80"
                                    >
                                        Reject
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
