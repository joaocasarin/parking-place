import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { SensorData } from '../../interfaces/SocketSensorData';

const Table = styled.table`
    border-style: hidden;
    border-collapse: collapse;

    tr,
    td {
        border-style: solid;
        border-width: 3px;
        border-color: black;
    }

    td {
        width: 50px;
        height: 70px;
    }

    td div {
        width: 40px;
        height: 40px;
        margin: auto;
        border-radius: 50%;

        text-align: center;
    }

    td div span {
        font-size: 18px;
        font-weight: bold;
    }
`;

interface SpotsTableProps {
    sensorData: SensorData;
}

const SpotsTable = ({ sensorData }: SpotsTableProps) => {
    const amountOfSensors = Object.keys(sensorData).length;
    const firstSensorDataHalf = Object.keys(sensorData).slice(0, amountOfSensors / 2);
    const secondSensorDataHalf = Object.keys(sensorData).slice(
        amountOfSensors / 2,
        amountOfSensors
    );

    return (
        <Table>
            <tbody>
                <tr>
                    {firstSensorDataHalf.map((sensor, index) => (
                        <td key={uuid()}>
                            <div
                                style={{
                                    backgroundColor: sensorData[sensor] ? 'red' : '#08cb33'
                                }}
                            >
                                <span>{`A${index + 1}`}</span>
                            </div>
                        </td>
                    ))}
                </tr>
                <tr>
                    {secondSensorDataHalf.map((sensor, index) => (
                        <td key={uuid()}>
                            <div
                                style={{
                                    backgroundColor: sensorData[sensor] ? 'red' : '#08cb33'
                                }}
                            >
                                <span>{`B${index + 1}`}</span>
                            </div>
                        </td>
                    ))}
                </tr>
            </tbody>
        </Table>
    );
};

export default SpotsTable;
