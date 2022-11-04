import { Tabs } from "antd";
import { useSelector } from "react-redux";
import MovieTabMobileItem from "./MovieTabMobileItem";

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

export default function MovieTabMobile() {
  let movieListTheater = useSelector(
    (state) => state.movieReducer.movieListByTheater
  );

  let renderContent = () => {
    return movieListTheater.map((heThongRap, index) => {
      return (
        <TabPane
          key={index}
          tab={
            <div className="" style={{ width: "15vw" }}>
              <img src={heThongRap.logo} className="w-10 h-10 m-auto" alt="" />
            </div>
          }
        >
          <Tabs tabPosition="left" className="h-400">
            {heThongRap.lstCumRap.map((cumRap, inCum) => {
              return (
                <TabPane
                  tab={
                    <div className="w-36 text-center whitespace-normal ">
                      <p
                        className="uppercase text-green-700 font-medium w-full"
                        style={{ fontSize: "12px" }}
                      >
                        {cumRap.tenCumRap}
                      </p>
                    </div>
                  }
                  key={inCum}
                >
                  <div className="h-400 overflow-y-scroll pl-6">
                    {cumRap.danhSachPhim.map((phim, inPhim) => {
                      if (inPhim < 20) {
                        return <MovieTabMobileItem key={inPhim} movie={phim} />;
                      }
                    })}
                  </div>
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  return (
    <Tabs
      className="border border-slate-200 my-7 mx-3 px-2"
      style={{ height: "500px" }}
      onChange={onChange}
      defaultActiveKey="1"
      tabPosition="top"
    >
      {renderContent()}
    </Tabs>
  );
}
