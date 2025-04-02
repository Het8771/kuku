import { useState, useEffect } from "react"
import { User, List, Trash2, LogOut } from "lucide-react"
import Navbar from "../Components/Navbar"
import Subscribe from "../Components/Subscribe"
import Footer from "../Components/Footer"
import About from "../assets/images/About.png"
import user from "../assets/images/user.png"

const orderStatuses = ["Ordered", "Shipping", "Out for Delivery", "Delivered"]

// Profile component
const Profile = () => {
  return (
    <div className="space-y-6">
      {/* <h3 className="text-xl font-semibold">My Profile</h3> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            defaultValue="Rahi"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            defaultValue="rahi@example.com"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            className="w-full p-2 border border-gray-300 rounded-md"
            defaultValue="+1 (555) 123-4567"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            defaultValue="123 Jewelry Lane, Gold District"
          />
        </div>
      </div> */}

      {/* <div className="pt-4">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
          Save Changes
        </button>
      </div> */}
    </div>
  )
}

// Order History component
// const OrderHistory = () => {
//   const orders = [
//     {
//       id: "ORD-12345",
//       date: "March 15, 2025",
//       status: "Delivered",
//       total: "$249.99",
//       items: 2
//     },
//     {
//       id: "ORD-12346",
//       date: "February 28, 2025",
//       status: "Delivered",
//       total: "$129.50",
//       items: 1
//     },
//     {
//       id: "ORD-12347",
//       date: "January 10, 2025",
//       status: "Cancelled",
//       total: "$75.00",
//       items: 1
//     }
//   ]

//   return (
//     <div className="space-y-6">
//       {/* <h3 className="text-xl font-semibold">Order History</h3> */}

//       {/* <div className="overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Order ID
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Date
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Status
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Total
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Items
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {orders.map(order => (
//               <tr key={order.id}>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                   {order.id}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {order.date}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm">
//                   <span
//                     className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                       order.status === "Delivered"
//                         ? "bg-green-100 text-green-800"
//                         : order.status === "Cancelled"
//                         ? "bg-red-100 text-red-800"
//                         : "bg-yellow-100 text-yellow-800"
//                     }`}
//                   >
//                     {order.status}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {order.total}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   {order.items}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                   <button className="text-purple-600 hover:text-purple-900">
//                     View Details
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div> */}
//     </div>
//   )
// }

// Track Order component
const TrackOrderContent = ({ orderStatus, orderDetails }) => {
  return (
    <div>
      {/* New Tracking Progress Steps */}
      <div className="mb-8">
        <ul
          aria-label="Order Status"
          className="items-center text-gray-600 font-medium md:flex"
        >
          {orderStatuses.map((item, idx) => (
            <li
              key={idx}
              aria-current={orderStatus === idx ? "step" : false}
              className="flex gap-x-3 md:flex-col md:flex-1 md:gap-x-0"
            >
              <div className="flex flex-col items-center md:flex-row md:flex-1">
                <hr
                  className={`w-full border hidden md:block ${idx === 0
                      ? "border-none"
                      : "" || orderStatus >= idx
                        ? "border-purple-600"
                        : ""
                    }`}
                />
                <div
                  className={`w-8 h-8 rounded-full border-2 flex-none flex items-center justify-center ${orderStatus > idx
                      ? "bg-purple-600 border-purple-600"
                      : "" || orderStatus === idx
                        ? "border-purple-600"
                        : ""
                    }`}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full bg-purple-600 ${orderStatus !== idx ? "hidden" : ""
                      }`}
                  ></span>
                  {orderStatus > idx ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </div>
                <hr
                  className={`h-12 border md:w-full md:h-auto ${idx + 1 === orderStatuses.length
                      ? "border-none"
                      : "" || orderStatus > idx
                        ? "border-purple-600"
                        : ""
                    }`}
                />
              </div>
              <div className="h-8 flex justify-center items-center md:mt-3 md:h-auto">
                <h3
                  className={`text-sm ${orderStatus === idx ? "text-purple-600" : ""
                    }`}
                >
                  {item}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Order Details */}
      {orderDetails ? (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 p-4 rounded">
            <h3 className="font-medium">
              Delivery by {orderDetails.deliveryBy}
            </h3>
            <p className="text-sm text-gray-600">
              Tracking ID: {orderDetails.trackingId}
            </p>
          </div>

          <div className="border border-gray-200 p-4 rounded">
            <h3 className="font-medium">Shipping Address</h3>
            <p className="text-sm text-gray-600">
              {orderDetails.shippingAddress}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-center mt-6">Loading order details...</p>
      )}

      {/* Product Image */}
      {orderDetails && (
        <div className="mt-6">
          <img
            src={About || "/placeholder.svg"}
            alt="Product"
            className="w-full max-w-xs rounded-md"
          />
        </div>
      )}
    </div>
  )
}

// Delete Account component
const DeleteAccount = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Delete Account</h3>
    </div>
  )
}

const TrackOrder = () => {
  const [activeSection, setActiveSection] = useState("track") // Default to track order
  const [orderStatus] = useState(1) // 1 = Shipping (default)
  const [orderDetails, setOrderDetails] = useState(null)

  useEffect(() => {
    // Simulating an API call
    setTimeout(() => {
      setOrderDetails({
        trackingId: "1234789412345689",
        deliveryBy: "Kuku Jewels",
        shippingAddress: "123 Jewelry Lane, Gold District, New York, NY 10001",
        productImage: "/path-to-product.jpg"
      })
    }, 1000)
  }, [])

  // Render the appropriate content based on activeSection
  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <Profile />
      case "orders":
        return <OrderHistory />
      case "delete":
        return <DeleteAccount />
      case "track":
      default:
        return (
          <TrackOrderContent
            orderStatus={orderStatus}
            orderDetails={orderDetails}
          />
        )
    }
  }

  return (
    <>
      <Navbar />
      <div className="">
        {/* Header */}
        <div className="max-w-6xl mx-auto p-6">
          <h2 className="text-2xl font-semibold">
            {activeSection === "profile"
              ? "My Profile"
              : activeSection === "orders"
                ? "Order History"
                : activeSection === "delete"
                  ? "Delete Account"
                  : "Track Your Order"}
          </h2>
          <p className="text-sm text-gray-500">
            Home /{" "}
            {activeSection === "profile"
              ? "My Profile"
              : activeSection === "orders"
                ? "Order History"
                : activeSection === "delete"
                  ? "Delete Account"
                  : "Track Your Order"}
          </p>

          <div className="flex flex-col md:flex-row gap-6 mt-6">
            {/* Sidebar */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 w-full md:w-1/4">
              <div className="flex items-center space-x-3">
                <img
                  src={user || "/placeholder.svg"}
                  alt="User"
                  className="w-12 h-12 rounded-full"
                />
                <span className="text-lg font-medium">Hii, Rahi</span>
              </div>

              <div className="mt-6 space-y-4">
                <button
                  className={`flex items-center w-full ${activeSection === "profile"
                      ? "bg-purple-600 text-white"
                      : "text-gray-700 hover:text-purple-600 hover:bg-purple-600 hover:text-white"
                    } p-2 rounded cursor-pointer`}
                  onClick={() => setActiveSection("profile")}
                >
                  <User className="mr-2" size={18} /> My Profile
                </button>
                <button
                  className={`flex items-center w-full ${activeSection === "track"
                      ? "bg-purple-600 text-white"
                      : "text-gray-700 hover:text-purple-600 hover:bg-purple-600 hover:text-white"
                    } p-2 rounded cursor-pointer`}
                  onClick={() => setActiveSection("track")}
                >
                  <List className="mr-2" size={18} /> Order History
                </button>
                <button
                  className={`flex items-center w-full ${activeSection === "delete"
                      ? "bg-purple-600 text-white"
                      : "text-gray-700 hover:text-purple-600 hover:bg-purple-600 hover:text-white"
                    } p-2 rounded cursor-pointer`}
                  onClick={() => setActiveSection("delete")}
                >
                  <Trash2 className="mr-2" size={18} /> Delete Account
                </button>
                <button className="flex items-center w-full text-gray-700 hover:text-purple-600 hover:bg-purple-600 hover:text-white p-2 rounded cursor-pointer">
                  <LogOut className="mr-2" size={18} /> Log out
                </button>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-3/4 bg-white border border-gray-200 rounded-lg p-6">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </>
  )
}

export default TrackOrder
