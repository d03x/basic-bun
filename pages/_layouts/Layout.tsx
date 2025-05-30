import { Fragment } from "react/jsx-runtime";

export default function Layout({children}:{children : React.ReactNode}){
  return (
    <Fragment>
      {children}
    </Fragment>
  );
 
}