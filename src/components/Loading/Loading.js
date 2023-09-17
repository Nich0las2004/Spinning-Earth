import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={classes.container}>
      <div className={classes.ring}>
        <span></span>
      </div>
    </div>
  );
};

export default Loading;
