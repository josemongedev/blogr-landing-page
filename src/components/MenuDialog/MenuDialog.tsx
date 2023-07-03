import "./MenuDialog.scss";

type Props = React.DetailedHTMLProps<
  React.DialogHTMLAttributes<HTMLDialogElement>,
  HTMLDialogElement
> & {
  open: boolean | undefined;
};

const MenuDialog = ({ children, open, ...props }: Props) => {
  return <>{open ? <dialog {...props}>{children}</dialog> : null}</>;
};

export default MenuDialog;
