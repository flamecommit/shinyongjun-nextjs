import data from "./data";

export default function Cart() {
  let cartItems = ["Tomatoes", "Pasta"];
  return (
    <div className="page-list">
      <h1 style={{ fontSize: 30 }}>장바구니</h1>
      <div className="cart-wrapper">
        {cartItems.map((item, index) => {
          return <CartItem item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

function CartItem(props: { item: string }) {
  return (
    <div className="cart-item">
      <div>{props.item}</div>
      <div>$40</div>
      <div>1개</div>
    </div>
  );
}
