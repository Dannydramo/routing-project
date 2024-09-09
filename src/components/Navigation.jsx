import React, { useState } from 'react';
import Button from './Button';
const Navigation = ({ navigation }) => {
    const [routes, setRoutes] = useState([
        { title: 'Root', children: navigation },
    ]);

    const handleTitleClick = (item) => {
        if (item.children) {
            setRoutes([
                ...routes,
                { title: item.title, children: item.children },
            ]);
        } else if (item.url) {
            window.location.href = item.url;
        }
    };

    const handleBackClick = () => {
        if (routes.length > 1) {
            setRoutes(routes.slice(0, -1));
        }
    };

    const currentRoute = routes[routes.length - 1];

    return (
        <div className="p-4 bg-gray-50 min-h-screen shadow-lg rounded-lg">
            <div className="flex items-center gap-4 justify-between mb-4">
                {routes.length > 1 && (
                    <>
                        <button
                            onClick={handleBackClick}
                            className="flex items-center text-gray-600 hover:text-gray-900"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-5 h-5 mr-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                            <span>Back</span>
                        </button>
                    </>
                )}
                <h2 className="text-xl font-semibold text-gray-800">
                    {currentRoute.title}
                </h2>
                <span />
            </div>

            <ul className="space-y-2">
                {currentRoute.children.map((item, index) => (
                    <li
                        key={index}
                        onClick={() => handleTitleClick(item)}
                        className="flex items-center gap-6 w-64 justify-between p-4 bg-white rounded-lg shadow-md hover:bg-gray-100 cursor-pointer transition-all"
                    >
                        <span className="text-gray-700 font-medium">
                            {item.title}
                        </span>
                        {item.children ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-5 h-5 text-gray-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-5 h-5 text-green-400"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 12h14"
                                />
                            </svg>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navigation;
