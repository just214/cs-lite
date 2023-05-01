// import { useEffect, useState } from "react";
import { createMetadata } from "utils/createMetadata";

export const metadata = createMetadata({
  title: "Portal",
  path: "/portal",
});

// import { EnterLogForm } from "./EnterLogForm";

// import { Tab } from "@headlessui/react";

// import Account from "components/Account";
// import Auth from "components/Auth";
// import { TranslationsTab } from "components/TranslationsTab";
// import { supabase } from "utils/supabaseClient";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Home(props) {
//   const [session, setSession] = useState(null);

//   useEffect(() => {
//     setSession(supabase.auth.session());

//     supabase.auth.onAuthStateChange((_event, session) => {
//       setSession(session);
//     });
//   }, []);

//   if (!session) {
//     return (
//       <>
//         <Auth />
//       </>
//     );
//   }

//   return (
//     <>
//       <Account key={session.user.id} session={session} />
//       <Tab.Group>
//         <Tab.List className="flex space-x-1 rounded-xl surface-alt p-1">
//           {["Check In", "Enter Log", "Translations"].map((title) => {
//             return (
//               <Tab
//                 key={title}
//                 className={({ selected }) =>
//                   classNames(
//                     "rounded-lg py-2.5 w-32 text-sm font-medium leading-5 text",
//                     "ring-white ring-opacity-60 ring-offset-2 ring-offset-cs-pink focus:outline-none focus:ring-2",
//                     selected ? "surface shadow" : ""
//                   )
//                 }
//               >
//                 {title}
//               </Tab>
//             );
//           })}
//         </Tab.List>
//         <Tab.Panels>
//           <Tab.Panel></Tab.Panel>
//           <Tab.Panel>Content 2</Tab.Panel>
//           <Tab.Panel>
//             <TranslationsTab logItems={props.constants.logItems} />
//           </Tab.Panel>
//         </Tab.Panels>
//       </Tab.Group>
//     </>
//   );
// }

// export async function getStaticProps() {
//   const TABLES = ["Log Items", "Log Units", "Pick Up Locations", "Food Shares"];

//   async function getData(tableNumber: number) {
//     let combinedRecords = [];
//     const endpoint = `https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_APP_ID}/${TABLES[tableNumber]}`;
//     const response = await fetch(endpoint, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_KEY}`,
//       },
//     });
//     const res = await response.json();

//     combinedRecords = res.records.map((r) => r.fields);

//     if (res?.offset) {
//       const end = `https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_APP_ID}/${TABLES[tableNumber]}?offset=${res?.offset}`;
//       const response2 = await fetch(end, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_KEY}`,
//         },
//       });

//       const res2 = await response2.json();
//       combinedRecords = [
//         ...combinedRecords,
//         ...res2.records.map((r) => r.fields),
//       ];
//     }
//     return combinedRecords;
//   }

//   const records = await Promise.all([
//     getData(0),
//     getData(1),
//     getData(2),
//     getData(3),
//   ]);

//   return {
//     props: {
//       constants: {
//         logItems: records[0].map((v) => ({
//           value: v.Name,
//           label: v.Name,
//           translation: v?.Translation || null,
//         })),
//         logUnits: records[1].map((v) => ({ value: v.Name, label: v.Name })),
//         pickupLocations: records[2].map((v) => ({
//           value: v.Name,
//           label: v.Name,
//         })),
//         foodShares: records[3].map((v) => ({
//           value: v.Location,
//           label: v.Location,
//         })),
//       },
//     },
//   };
// }

export default async function PortalPage() {
  return (
    <div className="grid place-items-center">
      <p className="text-4xl font-display text-cs-pink">🚧 Coming soon! </p>
    </div>
  );
}
