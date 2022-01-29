import React from "react";

function ProductCard(props) {
  const { item, onClick } = props;
  //   const histroy = useHistory();
  return (
    <div
      onClick={onClick}
      key={"product" + item.id}
      style={{
        backgroundColor: "rgba(255,250,250,1)",
        boxShadow: `3px 3px 10px 3px rgba(0,0,0,0.3)`,
        minHeight: "400px",
        // width: "max(27vw, 350px)",
        width: "max(min(95%,360px), 27vw)",
        marginBottom: "15px",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingTop: "10px",
        paddingBottom: "10px",
        borderRadius: "3%",
        display: "flex",
        flexDirection: "column",
        marginLeft: "2.2vw",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "300px",
          backgroundColor: "grey",
          borderRadius: "3%",
          objectFit: "cover",
        }}
        src={item.image}
        alt={"productImage"}
      />
      <div
        style={{
          display: "flex",
          minWidth: "100%",
          height: "80px",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "70%",
          }}
        >
          <label
            style={{
              fontSize: "18px",
              color: "InfoText",
              fontWeight: "bold",
            }}
          >
            {item.name}
          </label>
          <label
            style={{
              lineHeight: "16px",
              fontSize: "15px",
              color: "GrayText",
            }}
          >
            {item.model}
          </label>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            width: "30%",
          }}
        >
          <label
            style={{
              lineHeight: "16px",
              fontSize: "15px",
              fontWeight: "bold",
              color: "darkgoldenrod",
            }}
          >
            Price:
          </label>
          <label
            style={{
              lineHeight: "16px",
              fontSize: "15px",
              color: "black",
            }}
          >
            ₹
            {Intl.NumberFormat("en-IN", {
              maximumSignificantDigits: 3,
            }).format(item.price)}
          </label>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
