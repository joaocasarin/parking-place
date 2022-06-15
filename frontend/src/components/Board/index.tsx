import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import styled from 'styled-components';
import { SensorData, SocketSensorData } from '../../interfaces/SocketSensorData';
import SpotsTable from '../SpotsTable';

const BoardStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 700px;
    height: 400px;

    background-color: rgb(22, 122, 253);
    // 0, 128, 1

    border-radius: 50px;

    h2 {
        margin-bottom: 5px;
    }

    h5 {
        margin-top: 0;
    }
`;

const Board = () => {
    const socket = io('http://127.0.0.1:5000');
    const [sensorData, setSensorData] = useState<SensorData>({
        '1': false,
        '2': false,
        '3': false,
        '4': false,
        '5': false,
        '6': true,
        '7': false,
        '8': false,
        '9': false,
        '10': false
    });

    const updateSensorData = (data: SocketSensorData) => {
        setSensorData((prevData) => ({
            ...prevData,
            [data.sensor]: data.isFree
        }));
    };

    useEffect(() => {
        socket.on('sensor', (data: SocketSensorData) => {
            updateSensorData(data);
        });
    }, [socket]);

    return (
        <BoardStyle>
            <h2>Region: North</h2>
            <h5>
                Available spots:{' '}
                {Object.keys(sensorData).reduce(
                    (previousValue, currentValue) =>
                        sensorData[currentValue] ? previousValue + 0 : previousValue + 1,
                    0
                )}
            </h5>

            <SpotsTable sensorData={sensorData} />
        </BoardStyle>
    );
};

export default Board;
