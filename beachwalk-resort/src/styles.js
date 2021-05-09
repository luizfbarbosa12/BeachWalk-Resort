export const setColor = {
  primaryColor: "#af9a7d",
  mainWhite: "#eeeeee",
  mainBlack: "#222",
  mainGrey: "#ececec",
  lightGrey: "#f7f7f7",
};

export const setFont = {
  main: "font-family: 'Lato', sans-serif;",
};

export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `display: flex;
    align-items: ${y}; justify-content:${x}
    `;
};

export const setBackground = ({
  img = "https://images.pexels.com/photos/3007370/pexels-photo-3007370.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  color = "rgba(0, 0, 0, 0)",
} = {}) => {
  return `background: linear-gradient(${color}, ${color}),
    url(${img}) center/cover fixed no-repeat;`;
};
