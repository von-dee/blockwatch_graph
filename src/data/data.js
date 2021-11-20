// Mock Data to be imported
const mockdata = {
    M1: [[
            1637089200, // Unix timestamp
            120, // number of successful requests (2xx)
            0, // number of rejected requests (4xx)
            0, // number of rate limited requests (429)
            0, // number of failed requests (5xx)
            0.011, // median API latency
            1.023, // 99th percentile API latency
            25536, // data traffic in bytes
            52 // number of unique users in time-frame
        ],[
            1637089300, // Unix timestamp
            121, // number of successful requests (2xx)
            0, // number of rejected requests (4xx)
            0, // number of rate limited requests (429)
            0, // number of failed requests (5xx)
            0.016, // median API latency
            1.023, // 99th percentile API latency
            75536, // data traffic in bytes
            22 // number of unique users in time-frame
        ],[
            1637089400, // Unix timestamp
            122, // number of successful requests (2xx)
            0, // number of rejected requests (4xx)
            0, // number of rate limited requests (429)
            0, // number of failed requests (5xx)
            0.013, // median API latency
            1.023, // 99th percentile API latency
            75536, // data traffic in bytes
            42 // number of unique users in time-frame
        ],[
            1637089600, // Unix timestamp
            123, // number of successful requests (2xx)
            0, // number of rejected requests (4xx)
            0, // number of rate limited requests (429)
            0, // number of failed requests (5xx)
            0.012, // median API latency
            1.023, // 99th percentile API latency
            25536, // data traffic in bytes
            62 // number of unique users in time-frame
        ],[
            1637089700, // Unix timestamp
            124, // number of successful requests (2xx)
            0, // number of rejected requests (4xx)
            0, // number of rate limited requests (429)
            0, // number of failed requests (5xx)
            0.017, // median API latency
            1.023, // 99th percentile API latency
            45536, // data traffic in bytes
            72 // number of unique users in time-frame
        ],[
            1637089800, // Unix timestamp
            125, // number of successful requests (2xx)
            0, // number of rejected requests (4xx)
            0, // number of rate limited requests (429)
            0, // number of failed requests (5xx)
            0.013, // median API latency
            1.023, // 99th percentile API latency
            55536, // data traffic in bytes
            32 // number of unique users in time-frame
        ],[
            1637089900, // Unix timestamp
            126, // number of successful requests (2xx)
            0, // number of rejected requests (4xx)
            0, // number of rate limited requests (429)
            0, // number of failed requests (5xx)
            0.018, // median API latency
            1.023, // 99th percentile API latency
            75536, // data traffic in bytes
            52 // number of unique users in time-frame
        ],[
            1637090000, // Unix timestamp
            127, // number of successful requests (2xx)
            0, // number of rejected requests (4xx)
            0, // number of rate limited requests (429)
            0, // number of failed requests (5xx)
            0.013, // median API latency
            1.023, // 99th percentile API latency
            35536, // data traffic in bytes
            62 // number of unique users in time-frame
        ]],
    H1:  [[
        1637189200, // Unix timestamp
        20, // number of successful requests (2xx)
        0, // number of rejected requests (4xx)
        0, // number of rate limited requests (429)
        0, // number of failed requests (5xx)
        0.010, // median API latency
        1.023, // 99th percentile API latency
        75536, // data traffic in bytes
        42 // number of unique users in time-frame
    ],[
        1637289200, // Unix timestamp
        21, // number of successful requests (2xx)
        0, // number of rejected requests (4xx)
        0, // number of rate limited requests (429)
        0, // number of failed requests (5xx)
        0.05, // median API latency
        1.023, // 99th percentile API latency
        85536, // data traffic in bytes
        62 // number of unique users in time-frame
    ],[
        1637389200, // Unix timestamp
        18, // number of successful requests (2xx)
        0, // number of rejected requests (4xx)
        0, // number of rate limited requests (429)
        0, // number of failed requests (5xx)
        0.018, // median API latency
        1.023, // 99th percentile API latency
        35536, // data traffic in bytes
        62 // number of unique users in time-frame
    ],[
        1637489200, // Unix timestamp
        22, // number of successful requests (2xx)
        0, // number of rejected requests (4xx)
        0, // number of rate limited requests (429)
        0, // number of failed requests (5xx)
        0.013, // median API latency
        1.023, // 99th percentile API latency
        65536, // data traffic in bytes
        72 // number of unique users in time-frame
    ],[
        1637589200, // Unix timestamp
        17, // number of successful requests (2xx)
        0, // number of rejected requests (4xx)
        0, // number of rate limited requests (429)
        0, // number of failed requests (5xx)
        0.010, // median API latency
        1.023, // 99th percentile API latency
        75536, // data traffic in bytes
        32 // number of unique users in time-frame
    ],[
        1637689200, // Unix timestamp
        24, // number of successful requests (2xx)
        0, // number of rejected requests (4xx)
        0, // number of rate limited requests (429)
        0, // number of failed requests (5xx)
        0.018, // median API latency
        1.023, // 99th percentile API latency
        35536, // data traffic in bytes
        62 // number of unique users in time-frame
    ],[
        1637789200, // Unix timestamp
        18, // number of successful requests (2xx)
        0, // number of rejected requests (4xx)
        0, // number of rate limited requests (429)
        0, // number of failed requests (5xx)
        0.012, // median API latency
        1.023, // 99th percentile API latency
        55536, // data traffic in bytes
        32 // number of unique users in time-frame
    ],[
        1637889200, // Unix timestamp
        19, // number of successful requests (2xx)
        0, // number of rejected requests (4xx)
        0, // number of rate limited requests (429)
        0, // number of failed requests (5xx)
        0.016, // median API latency
        1.023, // 99th percentile API latency
        25536, // data traffic in bytes
        72 // number of unique users in time-frame
        ]],
    D:  [[
        1637089200, // Unix timestamp
        45, // number of successful requests (2xx)
        0, // number of rejected requests (4xx)
        0, // number of rate limited requests (429)
        0, // number of failed requests (5xx)
        0.013, // median API latency
        1.023, // 99th percentile API latency
        65536, // data traffic in bytes
        72 // number of unique users in time-frame
    ],[
        2637089200, // Unix timestamp
        20, // number of successful requests (2xx)
        0, // number of rejected requests (4xx)
        0, // number of rate limited requests (429)
        0, // number of failed requests (5xx)
        0.018, // median API latency
        1.023, // 99th percentile API latency
        75536, // data traffic in bytes
        82 // number of unique users in time-frame
    ],[
        3637089200, // Unix timestamp
        55, // number of successful requests (2xx)
        0, // number of rejected requests (4xx)
        0, // number of rate limited requests (429)
        0, // number of failed requests (5xx)
        0.011, // median API latency
        1.023, // 99th percentile API latency
        35536, // data traffic in bytes
        32 // number of unique users in time-frame
    ],[
        4637089200, // Unix timestamp
        30, // number of successful requests (2xx)
        0, // number of rejected requests (4xx)
        0, // number of rate limited requests (429)
        0, // number of failed requests (5xx)
        0.016, // median API latency
        1.023, // 99th percentile API latency
        75536, // data traffic in bytes
        72 // number of unique users in time-frame
    ],[
        5637089200, // Unix timestamp
        50, // number of successful requests (2xx)
        0, // number of rejected requests (4xx)
        0, // number of rate limited requests (429)
        0, // number of failed requests (5xx)
        0.012, // median API latency
        1.023, // 99th percentile API latency
        45536, // data traffic in bytes
        42 // number of unique users in time-frame
    ],[
        6637089200, // Unix timestamp
        20, // number of successful requests (2xx)
        0, // number of rejected requests (4xx)
        0, // number of rate limited requests (429)
        0, // number of failed requests (5xx)
        0.019, // median API latency
        1.023, // 99th percentile API latency
        75536, // data traffic in bytes
        62 // number of unique users in time-frame
    ],[
        7637089200, // Unix timestamp
        35, // number of successful requests (2xx)
        0, // number of rejected requests (4xx)
        0, // number of rate limited requests (429)
        0, // number of failed requests (5xx)
        0.011, // median API latency
        1.023, // 99th percentile API latency
        35536, // data traffic in bytes
        32 // number of unique users in time-frame
    ],[
        8637089200, // Unix timestamp
        40, // number of successful requests (2xx)
        0, // number of rejected requests (4xx)
        0, // number of rate limited requests (429)
        0, // number of failed requests (5xx)
        0.013, // median API latency
        1.023, // 99th percentile API latency
        55536, // data traffic in bytes
        82 // number of unique users in time-frame
        ]]
}                                    

export default mockdata;