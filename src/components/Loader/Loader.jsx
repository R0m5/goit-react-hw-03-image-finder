import { Triangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Triangle
      height="80"
      width="80"
      color="black"
      ariaLabel="triangle-loading"
      wrapperClassName=""
      visible={true}
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
      }}
    ></Triangle>
  );
};
