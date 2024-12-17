import { Header } from "./components/header";
import { Footer } from "./components/footer";

type Props = {
  children: React.ReactNode;
};

const PrivateLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PrivateLayout;
