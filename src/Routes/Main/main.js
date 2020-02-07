import React, { useState } from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";
import useInput from "../../Hooks/useInput";

const Container = styled.div`
    margin: 0 20px;
`;

const Main = () =>{
    const speaking = useInput(0);
    const writing = useInput(0);
    const listening = useInput(0);
    const reading = useInput(0);
    const attendance = useInput(0);
    const [series, setSeries] = useState([{
        name: 'Series',
        data: [80, 50, 30, 40, 100],
    }])
    const [options, setoptions] = useState(
        {
            chart: {
                height: 350,
                type: 'radar',
            },
            title: {
                text: '학생 포트폴리오'
            },
            xaxis: {
                categories: ['Speaking', 'Writing', 'Listening', 'Reading', 'Attendance']
            },
            yaxis:{
                min: 0,
                max:500,
                labels: {
                  formatter: function(val, i) {
                    if (i % 2 === 0) {
                      return val
                    } else {
                      return ''
                    }
                  }
                }
            }
        }
    )
    const onClick = () => {
        console.log(speaking);
        setSeries([{
            name: 'Series',
            data: [speaking.value,writing.value,listening.value,reading.value,attendance.value],
        }])
    }

    return (
        <Container>
             <input placeholder={'speaking'} onChange={speaking.onChange}></input>
            <input placeholder={'writing'} onChange={writing.onChange}></input>
            <input placeholder={'listening'} onChange={listening.onChange}></input>
            <input placeholder={'reading'} onChange={reading.onChange}></input>
            <input placeholder={'attendance'} onChange={attendance.onChange}></input>
            <button onClick={onClick}>클릭</button>
            <Chart options={options} series={series} type="radar" height={350} />
        </Container>
    )
}

export default Main;