import { Footer } from "components/Footer";
import { Header } from "components/Header";

type Props = { children?: React.ReactNode };

export const Layout = (props: Props) => {
  return (
    <div className="flex flex-col min-h-screen container mx-auto max-w-7xl p-2">
      <Header />
      <main className="flex-1 p-2 md:p-4 ">{props.children}</main>
      <Footer />
    </div>
  );
};
