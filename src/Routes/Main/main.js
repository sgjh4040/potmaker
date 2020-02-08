import React, { useState } from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";
import useInput from "../../Hooks/useInput";

const Container = styled.div`
    margin: 0 20px;
`;

const InputBox = styled.div`
    border: 1px solid black;
    padding: 20px;

`;
const InfoBox = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
`;
const Contents = styled.div`
    display: inherit;
    flex-direction: column;
    margin-left: 30px;
`;

const Category = styled.span`
    font-weight: 700;
    font-size: 20px;
    margin-right: 10px;
    
`;

const Profile = styled.div`
  background-image: ${props => `url(${props.background})`};
  background-size: cover;
  background-position: center center;
  width: 185px;
    height: 280px;
`

const Main = () => {
    const [isInputBox, setIsInputBox] = useState(true);
    const [profile, setProfile] = useState('');
    const name = useInput('');
    const age = useInput('');
    const address = useInput('');
    const phone = useInput('');
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
            yaxis: {
                min: 0,
                max: 500,
                labels: {
                    formatter: function (val, i) {
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
            data: [speaking.value, writing.value, listening.value, reading.value, attendance.value],
        }]);
    };
    const onImageChange = async (event) => {
        console.log('image change');
        if (event.target.files && event.target.files[0]){
            setProfile(URL.createObjectURL(event.target.files[0]))
        }
    }

    return (
        <Container>
            <InputBox>
                프로필:<input accept="image/*" onChange={onImageChange} placeholder={"프로필"} type="file"></input>
                <input style={{ display: 'block' }} placeholder={'이름'} onChange={name.onChange}></input>
                <input style={{ display: 'block' }} placeholder={'나이'} onChange={age.onChange}></input>
                <input style={{ display: 'block' }} placeholder={'주소'} onChange={address.onChange}></input>
                <input style={{ display: 'block' }} placeholder={'연락처'} onChange={phone.onChange}></input>
                <input placeholder={'speaking'} onChange={speaking.onChange}></input>
                <input placeholder={'writing'} onChange={writing.onChange}></input>
                <input placeholder={'listening'} onChange={listening.onChange}></input>
                <input placeholder={'reading'} onChange={reading.onChange}></input>
                <input placeholder={'attendance'} onChange={attendance.onChange}></input>
                <button onClick={onClick}>클릭</button>
            </InputBox>

            <InfoBox>
                <Profile background={profile} />
                <Contents>
                    <div style={{ marginBottom: '20px' }}>
                        <Category>
                            이름:
                    </Category>
                        {name.value}
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <Category>
                            나이:
                    </Category>
                        {age.value}
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <Category>
                            주소:
                    </Category>
                        {address.value}
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <Category>
                            연락처:
                    </Category>
                        {phone.value}
                </div>
                </Contents>
            </InfoBox>
            <Chart options={options} series={series} type="radar" height={350} />
        </Container>
    )
}

export default Main;