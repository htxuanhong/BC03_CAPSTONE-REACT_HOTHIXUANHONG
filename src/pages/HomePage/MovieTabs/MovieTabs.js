import { Tabs } from "antd";
import { useEffect, useState } from "react";
import { movieService } from "../../../services/movieService";
import MovieTabItem from "./MovieTabItem";
const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};
export default function MovieTabs() {
  const [dataRow, setDataRaw] = useState([]);
  useEffect(() => {
    movieService
      .getMovieByTheater()
      .then((res) => {
        console.log(res);
        setDataRaw(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let renderContent = () => {
    return dataRow.map((heThongRap, index) => {
      return (
        <TabPane
          tab={
            <div className="pb-3" style={{ borderBottom: "1px solid #e9e8e6" }}>
              <img src={heThongRap.logo} className=" w-12 h-12 " alt="" />
            </div>
          }
          key={index}
        >
          <Tabs tabPosition="left" style={{ height: 600 }}>
            {heThongRap.lstCumRap.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div
                      className="w-48 whitespace-normal text-left pb-3 "
                      style={{
                        borderBottom: "1px solid #e9e8e6",
                        marginLeft: "-24px",
                      }}
                    >
                      <p style={{ color: "#00ac4d", fontSize: "16px" }}>
                        {cumRap.tenCumRap}
                      </p>
                      <p className="text-gray-400">{cumRap.diaChi}</p>
                    </div>
                  }
                  key={index}
                >
                  <div style={{ height: 600, overflowY: " scroll" }}>
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
      className="border border-slate-200"
      style={{ height: 600, marginTop: "35px", marginBottom: "50px" }}
      tabPosition="left"
      defaultActiveKey="1"
      onChange={onChange}
    >
      {renderContent()}
    </Tabs>
  );
}
