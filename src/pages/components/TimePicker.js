import {DateInput, DateSegment, Label, TimeField} from "react-aria-components";
import {memo} from "react";

const TimePicker = memo(function TimePicker({onChange}) {
    return (
        <div style={{
            margin: "50px 15px",
        }}>
            <TimeField onChange={onChange}>
                <Label style={{fontSize: "20px"}}>Таймер</Label>
                <DateInput>
                    {segment => <DateSegment segment={segment} />}
                </DateInput>
            </TimeField>
        </div>
    )
})

export default TimePicker;