export const Button = ({ children, ...props }: { children: React.ReactNode }) => {
  return <button {...props}>{children}</button>;
};
