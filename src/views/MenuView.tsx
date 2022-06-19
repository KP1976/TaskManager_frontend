import { MobileMenu } from "../components/MobileMenu/MobileMenu";

interface Props {
  open: boolean;
}

export const MenuView = ({ open }: Props) => <MobileMenu isOpen={open} />;
