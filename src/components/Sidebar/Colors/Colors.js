import "./Colors.css";
import Input from "../Input/Input";
const Colors = ({ handleChange }) => {
  return (
    <section class="radio-section">
      <div class="radio-list">
        <Input name="color" id="color1" value="All" />
        <Input name="color" id="color2" value="Black" />
        <Input name="color" id="color3" value="White" />
        <Input name="color" id="color4" value="Blue" />
        <Input name="color" id="color5" value="Red" />
      </div>
    </section>
  );
};

export default Colors;
