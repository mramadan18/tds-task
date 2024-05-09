import moment from "moment";
import { DateRange } from "react-date-range";
import { useState } from "react";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const Calender = () => {
  const [state, setState] = useState<any>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [arrDates, setArrDate] = useState<string[]>([]);

  const handleDate = () => {
    const start = moment(state[0].startDate).format("YYYY-MM-DD");
    const end = moment(state[0].endDate).format("YYYY-MM-DD");

    const startDate = moment(start);
    const endDate = moment(end);

    const datesArray = [];

    while (startDate.isSameOrBefore(endDate)) {
      datesArray.push({
        year: startDate.year(),
        month: startDate.month() + 1,
        day: startDate.date(),
      });
      startDate.add(1, "days");
    }

    const datesFormat: string[] = datesArray.map(
      (date) => `${date.year}-${date.month}-${date.day}`
    );

    setArrDate(datesFormat);
  };

  return (
    <div className="text-center mt-8">
      <DateRange
        editableDateInputs={true}
        onChange={(item: any) => setState([item.selection])}
        moveRangeOnFirstSelection={true}
        ranges={state}
      />

      <button
        className="bg-primary text-white rounded-lg block py-2 px-4 mx-auto mt-4"
        onClick={handleDate}
      >
        Send
      </button>
    </div>
  );
};

export default Calender;
