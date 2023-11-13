import Input from "../Input/Input";
import "./Category.css";

function Category() {
  return (
    <section class="radio-section">
      <div class="radio-list">
        <Input name="category" id="category1" value="All" />
        <Input name="category" id="category2" value="Sneakers" />
        <Input name="category" id="category3" value="Flats" />
        <Input name="category" id="category4" value="Sandals" />
        <Input name="category" id="category5" value="Heels" />
      </div>
    </section>
  );
}

export default Category;
