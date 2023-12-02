import "./Price.css";
import Input from "../Input/Input";
const Price = () => {
  return (
    <>
      <section className="radio-section">
        <div className="radio-list">
          <Input name="price" id="price1" value="All" />
          <Input name="price" id="price2" value="$0 - 50" />
          <Input name="price" id="price3" value="$50 - $100" />
          <Input name="price" id="price4" value="$100 - $150" />
          <Input name="price" id="price5" value="Over $150" />
        </div>
      </section>
    </>
  );
};

export default Price;
