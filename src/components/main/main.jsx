import "./main.scss";

export function Main(props) {
  const {
    children
  } = props;
// flex items-center 
  return <main className="main">{children}</main>;
}
