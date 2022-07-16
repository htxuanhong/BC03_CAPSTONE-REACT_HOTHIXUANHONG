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
          tab={<img src={heThongRap.logo} className=" w-10 h-10" alt="" />}
          key={index}
        >
          <Tabs tabPosition="left" style={{ height: 500 }}>
            {heThongRap.lstCumRap.map((cumRap, index) => {
              return (
                <TabPane
                  tab={
                    <div className="w-48 whitespace-normal text-left">
                      <p>{cumRap.tenCumRap}</p>
                      <p>{cumRap.diaChi}</p>
                    </div>
                  }
                  key={index}
                >
                  <div style={{ height: 500, overflowY: " scroll" }}>
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
      style={{ height: 500, marginTop: "35px" }}
      tabPosition="left"
      defaultActiveKey="1"
      onChange={onChange}
    >
      {renderContent()}
    </Tabs>
  );
}
