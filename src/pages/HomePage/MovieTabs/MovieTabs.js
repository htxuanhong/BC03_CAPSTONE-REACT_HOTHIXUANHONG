import { Tabs } from "antd";
import { useSelector } from "react-redux";
import MovieTabItem from "./MovieTabItem";

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};
export default function MovieTabs() {
  let movieListTheater = useSelector(
    (state) => state.movieReducer.movieListByTheater
  );

  let renderContent = () => {
    return movieListTheater.map((heThongRap, index) => {
      return (
        <TabPane
          tab={
            <div>
              <img src={heThongRap.logo} className=" w-12 h-12 " alt="" />
            </div>
          }
          key={index}
        >
          <Tabs tabPosition="left" className="h-500">
            {heThongRap.lstCumRap.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div className="w-72 whitespace-normal text-center">
                      <p style={{ color: "#00ac4d" }} className="font-medium">
                        {cumRap.tenCumRap.toUpperCase()}
                      </p>
                      <p className="text-gray-500">{cumRap.diaChi}</p>
                    </div>
                  }
                  key={index}
                >
                  <div className="h-500 overflow-y-scroll ">
                    {cumRap.danhSachPhim.map((phim, index) => {
                      if (index < 20) {
                        return <MovieTabItem key={index} movie={phim} />;
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
      className="border border-slate-200 "
      style={{ height: 500, marginTop: "35px", marginBottom: "50px" }}
      tabPosition="left"
      defaultActiveKey="1"
      onChange={onChange}
    >
      {renderContent()}
    </Tabs>
  );
}
