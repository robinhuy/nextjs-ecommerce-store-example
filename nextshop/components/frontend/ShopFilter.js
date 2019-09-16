const ShopFilter = () => {
  return (
    <div className="flex-sb-m flex-w p-b-35">
      <div className="flex-w">
        <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
          <select className="selection-2" name="sorting">
            <option>Default Sorting</option>
            <option>Popularity</option>
            <option>Price: low to high</option>
            <option>Price: high to low</option>
          </select>
        </div>
        
        <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
          <select className="selection-2" name="sorting">
            <option>Price</option>
            <option>$0.00 - $50.00</option>
            <option>$50.00 - $100.00</option>
            <option>$100.00 - $150.00</option>
            <option>$150.00 - $200.00</option>
            <option>$200.00+</option>
          </select>
        </div>
      </div>

      <span className="s-text8 p-t-5 p-b-5">Showing 1–12 of 16 results</span>
    </div>
  );
};

export default ShopFilter;
