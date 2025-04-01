import React from "react";

const Subscribe = () => {
    return (
        <>
        <div className="bg-purple-600 text-white text-center py-10">
            <h3 className="text-xl font-semibold">Subscribe to Our Newsletter</h3>
            <p className="text-sm mt-2">Stay updated with our latest collections, exclusive offers, and jewelry care tips</p>
            <div className="mt-4 flex justify-center">
                <input
                    type="email"
                    placeholder="Your email address"
                    className="p-3 w-72 outline-none border border-white rounded"
                />
                <button className="bg-white text-purple-600 px-4 py-3 rounded-r-md ml-2">Subscribe</button>
            </div>
        </div>
        </>
    )
}
export default Subscribe;
