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
  const [dataRow, setDataRow] = useState(null);

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
  }, [id]);

  let renderContent = () => {
    return dataRow?.heThongRapChieu?.map((heThongRap, ri) => {
      return (
        <TabPane
          tab={<img src={heThongRap.logo} className="w-10 h-10" alt="" />}
          key={ri}
        >
          <Tabs tabPosition="left" style={{ height: 400 }}>
            {heThongRap.cumRapChieu.map((cumRap, cri) => {
              return (
                <TabPane
                  tab={
                    <div
                      className="w-44 whitespace-normal text-left"
                      style={{ color: "rgb(139, 195, 74)" }}
                    >
                      <p>{cumRap.tenCumRap}</p>
                    </div>
                  }
                  key={cri}
                >
                  <div style={{ height: 400, overflowY: "scroll" }}>
                    {cumRap.lichChieuPhim.map((x, lcpi) => {
                      return (
                        <div
                          key={lcpi}
                          className="border border-x-slate-200 bg-gray-100 p-2 rounded w-max my-3 hover:font-bold hover:text-sm "
                        >
                          <p>
                            <span style={{ color: "#7A4069" }}>{x.tenRap}</span>{" "}
                            -
                            <span style={{ color: "#00ac4d" }}>
                              {" "}
                              {moment(x.ngayChieuGioChieu).format(
                                "DD/MM/YYYY "
                              )}
                            </span>{" "}
                            ~{" "}
                            <span style={{ color: "#EB4747" }}>
                              {" "}
                              {moment(x.ngayChieuGioChieu).format("HH:MM")}
                            </span>
                          </p>
                        </div>
                      );
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
    <div
      className="px-64 py-20 "
      style={{ background: "#06283D", backgroundAttachment: "fixed" }}
    >
      <div className="border border-orange-100 bg-white rounded-lg">
        <div className="pt-10 text-center text-lg font-bold">
          Phim: <span style={{ color: "#18978F" }}>{dataRow?.tenPhim}</span>
        </div>

        {dataRow?.heThongRapChieu?.length > 0 ? (
          <Tabs
            style={{ height: 400, marginTop: "35px", marginLeft: "40px" }}
            tabPosition="left"
            defaultActiveKey="1"
            onChange={onChange}
          >
            {renderContent()}
          </Tabs>
        ) : (
          <div className="text-center py-32" style={{ height: 400 }}>
            Xin lỗi, phim chưa có lịch chiếu, hãy chọn phim khác.
          </div>
        )}
      </div>
    </div>
  );
}
