import { Heading } from "../components/Heading/Heading"
import { Input } from "../components/input/input"


export const loginPage = () => {
    return (
        <>
        <Heading text="Login" />
        <form className="form" action="">
          <Input inputPlaceholder = {"Login"} inputType = {"Login"}/>
          <br />
          <Input inpuPlaceholder = {"Password"} inputType = {"password"}/>
          <br />
          <button>Submit</button>
        </form>
      </>
    )
}
