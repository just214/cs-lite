export function Account() {
  return <p>Coming Soon.</p>;
}

// import { useEffect, useState } from "react";

// import { supabase } from "utils/supabaseClient";

// export default function Account({ session }) {
//   const [loading, setLoading] = useState(true);
//   const [username, setUsername] = useState(null);

//   useEffect(() => {
//     getProfile();
//   }, [session]);

//   async function getProfile() {
//     try {
//       setLoading(true);
//       const user = supabase.auth.user();

//       const { data, error, status } = await supabase
//         .from("profiles")
//         .select(`username`)
//         .eq("id", user.id)
//         .single();

//       if (error && status !== 406) {
//         throw error;
//       }

//       if (data) {
//         setUsername(data.username);
//       }
//     } catch (error) {
//       console.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   async function updateProfile({ username }) {
//     try {
//       setLoading(true);
//       const user = supabase.auth.user();

//       const updates = {
//         id: user.id,
//         username,
//         updated_at: new Date(),
//       };

//       let { error } = await supabase.from("profiles").upsert(updates, {
//         returning: "minimal", // Don't return the value after inserting
//       });

//       if (error) {
//         throw error;
//       }
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="form-widget">
//       <div>
//         <label htmlFor="email">Email</label>
//         <input
//           className="input input-medium input-bordered"
//           id="email"
//           type="text"
//           value={session.user.email}
//           disabled
//         />
//       </div>
//       <div>
//         <label htmlFor="username">Name</label>
//         <input
//           id="username"
//           className="input input-medium input-bordered"
//           type="text"
//           value={username || ""}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>

//       <div>
//         <button
//           className="btn"
//           onClick={() => updateProfile({ username })}
//           disabled={loading}
//         >
//           {loading ? "Loading ..." : "Update"}
//         </button>
//       </div>

//       <div>
//         <button
//           className="button block"
//           onClick={() => supabase.auth.signOut()}
//         >
//           Sign Out
//         </button>
//       </div>
//     </div>
//   );
// }
