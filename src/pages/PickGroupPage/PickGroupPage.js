import { Tabs } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../../services/movieService";

const { TabPane } = Tabs;
const onChange = (key) => {
  console.log(key);
};
export default function PickGroupPage() {
  let { id } = useParams([]);
  const [dataRow, setDataRow] = useState([]);

  useEffect(() => {
    movieService
      .getMoviePickGroup(id)
      .then((res) => {
        console.log(res);
        setDataRow(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let renderContent = () => {
    return dataRow?.heThongRapChieu?.map((heThongRap, ri) => {
      return (
        <TabPane
          tab={<img src={heThongRap.logo} className="w-10 h-10" alt="" />}
          key={ri}
        >
          <Tabs tabPosition="left" style={{ height: 500 }}>
            {heThongRap.cumRapChieu.map((cumRap, cri) => {
              return (
                <TabPane
                  tab={
                    <div className="w-48 whitespace-normal text-left">
                      <p>{cumRap.tenCumRap}</p>
                    </div>
                  }
                  key={cri}
                >
                  <div style={{ height: 500, overflowY: "scroll" }}>
                    {cumRap.lichChieuPhim.map((x, lcpi) => {
                      if (lcpi < 20) {
                        return (
                          <div key={lcpi}>
                            <p>
                              {x.tenRap} -{" "}
                              {moment(x.ngayChieuGioChieu).format(
                                "DD/MM/YYYY ~ h:mm A"
                              )}{" "}
                              - {x.giaVe}
                            </p>
                          </div>
                        );
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
    <div className="px-64">
      <div>
        <div>Thông tin phim</div>
        <div>{dataRow.tenPhim}</div>
      </div>
      <Tabs
        style={{ height: 500, marginTop: "35px" }}
        tabPosition="left"
        defaultActiveKey="1"
        onChange={onChange}
      >
        {renderContent()}
      </Tabs>
    </div>
  );
}
