function forFisher(k1, k2) {
    const TABLE = [
        [ 161.448, 199.500, 215.707, 224.583, 230.162, 233.986, 236.768, 238.883, 240.543, 241.882 ],
        [ 18.513, 19.000, 19.164, 19.247, 19.296, 19.330, 19.353, 19.371, 19.385, 19.396 ],
        [ 10.128, 9.552, 9.277, 9.117, 9.013, 8.941, 8.887, 8.845, 8.812, 8.786 ],
        [ 7.709, 6.944, 6.591, 6.388, 6.256, 6.163, 6.094, 6.041, 5.999, 5.964 ],
        [ 6.608, 5.786, 5.409, 5.192, 5.050, 4.950, 4.876, 4.818, 4.772, 4.735 ],
        [ 5.987, 5.143, 4.757, 4.534, 4.387, 4.284, 4.207, 4.147, 4.099, 4.060 ],
        [ 5.591, 4.737, 4.347, 4.120, 3.972, 3.866, 3.787, 3.726, 3.677, 3.637 ],
        [ 5.318, 4.459, 4.066, 3.838, 3.687, 3.581, 3.500, 3.438, 3.388, 3.347 ],
        [ 5.117, 4.256, 3.863, 3.633, 3.482, 3.374, 3.293, 3.230, 3.179, 3.137 ],
        [ 4.965, 4.103, 3.708, 3.478, 3.326, 3.217, 3.135, 3.072, 3.020, 2.978 ],
        [ 4.844, 3.982, 3.587, 3.357, 3.204, 3.095, 3.012, 2.948, 2.896, 2.854 ],
        [ 4.747, 3.885, 3.490, 3.259, 3.106, 2.996, 2.913, 2.849, 2.796, 2.753 ],
        [ 4.667, 3.806, 3.411, 3.179, 3.025, 2.915, 2.832, 2.767, 2.714, 2.671 ],
        [ 4.600, 3.739, 3.344, 3.112, 2.958, 2.848, 2.764, 2.699, 2.646, 2.602 ],
        [ 4.543, 3.682, 3.287, 3.056, 2.901, 2.790, 2.707, 2.641, 2.588, 2.544 ],
        [ 4.494, 3.634, 3.239, 3.007, 2.852, 2.741, 2.657, 2.591, 2.538, 2.494 ],
        [ 4.451, 3.592, 3.197, 2.965, 2.810, 2.699, 2.614, 2.548, 2.494, 2.450 ],
        [ 4.414, 3.555, 3.160, 2.928, 2.773, 2.661, 2.577, 2.510, 2.456, 2.412 ],
        [ 4.381, 3.522, 3.127, 2.895, 2.740, 2.628, 2.544, 2.477, 2.423, 2.378 ],
        [ 4.351, 3.493, 3.098, 2.866, 2.711, 2.599, 2.514, 2.447, 2.393, 2.348 ],
        [ 4.325, 3.467, 3.072, 2.840, 2.685, 2.573, 2.488, 2.420, 2.366, 2.321 ],
        [ 4.301, 3.443, 3.049, 2.817, 2.661, 2.549, 2.464, 2.397, 2.342, 2.297 ],
        [ 4.279, 3.422, 3.028, 2.796, 2.640, 2.528, 2.442, 2.375, 2.320, 2.275 ],
        [ 4.260, 3.403, 3.009, 2.776, 2.621, 2.508, 2.423, 2.355, 2.300, 2.255 ],
        [ 4.242, 3.385, 2.991, 2.759, 2.603, 2.490, 2.405, 2.337, 2.282, 2.236 ],
        [ 4.225, 3.369, 2.975, 2.743, 2.587, 2.474, 2.388, 2.321, 2.265, 2.220 ],
        [ 4.210, 3.354, 2.960, 2.728, 2.572, 2.459, 2.373, 2.305, 2.250, 2.204 ],
        [ 4.196, 3.340, 2.947, 2.714, 2.558, 2.445, 2.359, 2.291, 2.236, 2.190 ],
        [ 4.183, 3.328, 2.934, 2.701, 2.545, 2.432, 2.346, 2.278, 2.223, 2.177 ],
        [ 4.171, 3.316, 2.922, 2.690, 2.534, 2.421, 2.334, 2.266, 2.211, 2.165 ],
        [ 4.160, 3.305, 2.911, 2.679, 2.523, 2.409, 2.323, 2.255, 2.199, 2.153 ],
        [ 4.149, 3.295, 2.901, 2.668, 2.512, 2.399, 2.313, 2.244, 2.189, 2.142 ],
        [ 4.139, 3.285, 2.892, 2.659, 2.503, 2.389, 2.303, 2.235, 2.179, 2.133 ],
        [ 4.130, 3.276, 2.883, 2.650, 2.494, 2.380, 2.294, 2.225, 2.170, 2.123 ],
        [ 4.121, 3.267, 2.874, 2.641, 2.485, 2.372, 2.285, 2.217, 2.161, 2.114 ],
        [ 4.113, 3.259, 2.866, 2.634, 2.477, 2.364, 2.277, 2.209, 2.153, 2.106 ],
        [ 4.105, 3.252, 2.859, 2.626, 2.470, 2.356, 2.270, 2.201, 2.145, 2.098 ],
        [ 4.098, 3.245, 2.852, 2.619, 2.463, 2.349, 2.262, 2.194, 2.138, 2.091 ],
        [ 4.091, 3.238, 2.845, 2.612, 2.456, 2.342, 2.255, 2.187, 2.131, 2.084 ],
        [ 4.085, 3.232, 2.839, 2.606, 2.449, 2.336, 2.249, 2.180, 2.124, 2.077 ],
        [ 4.079, 3.226, 2.833, 2.600, 2.443, 2.330, 2.243, 2.174, 2.118, 2.071 ],
        [ 4.073, 3.220, 2.827, 2.594, 2.438, 2.324, 2.237, 2.168, 2.112, 2.065 ],
        [ 4.067, 3.214, 2.822, 2.589, 2.432, 2.318, 2.232, 2.163, 2.106, 2.059 ],
        [ 4.062, 3.209, 2.816, 2.584, 2.427, 2.313, 2.226, 2.157, 2.101, 2.054 ],
        [ 4.057, 3.204, 2.812, 2.579, 2.422, 2.308, 2.221, 2.152, 2.096, 2.049 ],
        [ 4.052, 3.200, 2.807, 2.574, 2.417, 2.304, 2.216, 2.147, 2.091, 2.044 ],
        [ 4.047, 3.195, 2.802, 2.570, 2.413, 2.299, 2.212, 2.143, 2.086, 2.039 ],
        [ 4.043, 3.191, 2.798, 2.565, 2.409, 2.295, 2.207, 2.138, 2.082, 2.035 ],
        [ 4.038, 3.187, 2.794, 2.561, 2.404, 2.290, 2.203, 2.134, 2.077, 2.030 ],
        [ 4.034, 3.183, 2.790, 2.557, 2.400, 2.286, 2.199, 2.130, 2.073, 2.026 ]
    ]

    return TABLE[k2 - 1][k1 - 1]
}

function criticalPointT (k) {
    let criticalPointValue = 0

    switch (k) {
        case 1: criticalPointValue = 6.314; break
        case 2: criticalPointValue = 2.920; break
        case 3: criticalPointValue = 2.353; break
        case 4: criticalPointValue = 2.132; break
        case 5: criticalPointValue = 2.015; break
        case 6: criticalPointValue = 1.943; break
        case 7: criticalPointValue = 1.895; break
        case 8: criticalPointValue = 1.860; break
        case 9: criticalPointValue = 1.833; break
        case 10: criticalPointValue = 1.812; break
        case 11: criticalPointValue = 1.796; break
        case 12: criticalPointValue = 1.782; break
        case 13: criticalPointValue = 1.771; break
        case 14: criticalPointValue = 1.761; break
        case 15: criticalPointValue = 1.753; break
        case 16: criticalPointValue = 1.746; break
        case 17: criticalPointValue = 1.740; break
        case 18: criticalPointValue = 1.734; break
        case 19: criticalPointValue = 1.729; break
        case 20: criticalPointValue = 1.725; break
    }

    return criticalPointValue
}

function laplaceIntegralReversed (laplaceIntegral) {
    let point = 0
    
    switch (laplaceIntegral.toFixed(3)) {
        case '0.000': point = 0.00; break
        case '0.004': point = 0.01; break
        case '0.008': point = 0.02; break
        case '0.012': point = 0.03; break
        case '0.016': point = 0.04; break
        case '0.020': point = 0.05; break
        case '0.024': point = 0.06; break
        case '0.028': point = 0.07; break
        case '0.032': point = 0.08; break
        case '0.036': point = 0.09; break
        case '0.040': point = 0.10; break
        case '0.044': point = 0.11; break
        case '0.048': point = 0.12; break
        case '0.052': point = 0.13; break
        case '0.056': point = 0.14; break
        case '0.060': point = 0.15; break
        case '0.064': point = 0.16; break
        case '0.067': point = 0.17; break
        case '0.071': point = 0.18; break
        case '0.075': point = 0.19; break
        case '0.079': point = 0.20; break
        case '0.083': point = 0.21; break
        case '0.087': point = 0.22; break
        case '0.091': point = 0.23; break
        case '0.095': point = 0.24; break
        case '0.099': point = 0.25; break
        case '0.103': point = 0.26; break
        case '0.106': point = 0.27; break
        case '0.110': point = 0.28; break
        case '0.114': point = 0.29; break
        case '0.118': point = 0.30; break
        case '0.122': point = 0.31; break
        case '0.126': point = 0.32; break
        case '0.129': point = 0.33; break
        case '0.133': point = 0.34; break
        case '0.137': point = 0.35; break
        case '0.141': point = 0.36; break
        case '0.144': point = 0.37; break
        case '0.148': point = 0.38; break
        case '0.152': point = 0.39; break
        case '0.155': point = 0.40; break
        case '0.159': point = 0.41; break
        case '0.163': point = 0.42; break
        case '0.166': point = 0.43; break
        case '0.170': point = 0.44; break
        case '0.174': point = 0.45; break
        case '0.177': point = 0.46; break
        case '0.181': point = 0.47; break
        case '0.184': point = 0.48; break
        case '0.188': point = 0.49; break
        case '0.191': point = 0.50; break
        case '0.195': point = 0.51; break
        case '0.198': point = 0.52; break
        case '0.202': point = 0.53; break
        case '0.205': point = 0.54; break
        case '0.209': point = 0.55; break
        case '0.212': point = 0.56; break
        case '0.216': point = 0.57; break
        case '0.219': point = 0.58; break
        case '0.222': point = 0.59; break
        case '0.226': point = 0.60; break
        case '0.229': point = 0.61; break
        case '0.232': point = 0.62; break
        case '0.236': point = 0.63; break
        case '0.239': point = 0.64; break
        case '0.242': point = 0.65; break
        case '0.245': point = 0.66; break
        case '0.249': point = 0.67; break
        case '0.252': point = 0.68; break
        case '0.255': point = 0.69; break
        case '0.258': point = 0.70; break
        case '0.261': point = 0.71; break
        case '0.264': point = 0.72; break
        case '0.267': point = 0.73; break
        case '0.270': point = 0.74; break
        case '0.273': point = 0.75; break
        case '0.276': point = 0.76; break
        case '0.279': point = 0.77; break
        case '0.282': point = 0.78; break
        case '0.285': point = 0.79; break
        case '0.288': point = 0.80; break
        case '0.291': point = 0.81; break
        case '0.294': point = 0.82; break
        case '0.297': point = 0.83; break
        case '0.300': point = 0.84; break
        case '0.302': point = 0.85; break
        case '0.305': point = 0.86; break
        case '0.308': point = 0.87; break
        case '0.311': point = 0.88; break
        case '0.313': point = 0.89; break
        case '0.316': point = 0.90; break
        case '0.319': point = 0.91; break
        case '0.321': point = 0.92; break
        case '0.324': point = 0.93; break
        case '0.326': point = 0.94; break
        case '0.329': point = 0.95; break
        case '0.331': point = 0.96; break
        case '0.334': point = 0.97; break
        case '0.336': point = 0.98; break
        case '0.339': point = 0.99; break
        case '0.341': point = 1.00; break
        case '0.344': point = 1.01; break
        case '0.346': point = 1.02; break
        case '0.348': point = 1.03; break
        case '0.351': point = 1.04; break
        case '0.353': point = 1.05; break
        case '0.355': point = 1.06; break
        case '0.358': point = 1.07; break
        case '0.360': point = 1.08; break
        case '0.362': point = 1.09; break
        case '0.364': point = 1.10; break
        case '0.367': point = 1.11; break
        case '0.369': point = 1.12; break
        case '0.371': point = 1.13; break
        case '0.373': point = 1.14; break
        case '0.375': point = 1.15; break
        case '0.377': point = 1.16; break
        case '0.379': point = 1.17; break
        case '0.381': point = 1.18; break
        case '0.383': point = 1.19; break
        case '0.385': point = 1.20; break
        case '0.387': point = 1.21; break
        case '0.389': point = 1.22; break
        case '0.391': point = 1.23; break
        case '0.393': point = 1.24; break
        case '0.394': point = 1.25; break
        case '0.396': point = 1.26; break
        case '0.398': point = 1.27; break
        case '0.400': point = 1.28; break
        case '0.401': point = 1.29; break
        case '0.403': point = 1.30; break
        case '0.405': point = 1.31; break
        case '0.407': point = 1.32; break
        case '0.408': point = 1.33; break
        case '0.410': point = 1.34; break
        case '0.411': point = 1.35; break
        case '0.413': point = 1.36; break
        case '0.415': point = 1.37; break
        case '0.416': point = 1.38; break
        case '0.418': point = 1.39; break
        case '0.419': point = 1.40; break
        case '0.421': point = 1.41; break
        case '0.422': point = 1.42; break
        case '0.424': point = 1.43; break
        case '0.425': point = 1.44; break
        case '0.426': point = 1.45; break
        case '0.428': point = 1.46; break
        case '0.429': point = 1.47; break
        case '0.431': point = 1.48; break
        case '0.432': point = 1.49; break
        case '0.433': point = 1.50; break
        case '0.434': point = 1.51; break
        case '0.436': point = 1.52; break
        case '0.437': point = 1.53; break
        case '0.438': point = 1.54; break
        case '0.439': point = 1.55; break
        case '0.441': point = 1.56; break
        case '0.442': point = 1.57; break
        case '0.443': point = 1.58; break
        case '0.444': point = 1.59; break
        case '0.445': point = 1.60; break
        case '0.446': point = 1.61; break
        case '0.447': point = 1.62; break
        case '0.448': point = 1.63; break
        case '0.449': point = 1.64; break
        case '0.451': point = 1.65; break
        case '0.452': point = 1.66; break
        case '0.453': point = 1.67; break
        case '0.454': point = 1.68; break
        case '0.454': point = 1.69; break
        case '0.455': point = 1.70; break
        case '0.456': point = 1.71; break
        case '0.457': point = 1.72; break
        case '0.458': point = 1.73; break
        case '0.459': point = 1.74; break
        case '0.460': point = 1.75; break
        case '0.461': point = 1.76; break
        case '0.462': point = 1.77; break
        case '0.462': point = 1.78; break
        case '0.463': point = 1.79; break
        case '0.464': point = 1.80; break
        case '0.465': point = 1.81; break
        case '0.466': point = 1.82; break
        case '0.466': point = 1.83; break
        case '0.467': point = 1.84; break
        case '0.468': point = 1.85; break
        case '0.469': point = 1.86; break
        case '0.469': point = 1.87; break
        case '0.470': point = 1.88; break
        case '0.471': point = 1.89; break
        case '0.471': point = 1.90; break
        case '0.472': point = 1.91; break
        case '0.473': point = 1.92; break
        case '0.473': point = 1.93; break
        case '0.474': point = 1.94; break
        case '0.474': point = 1.95; break
        case '0.475': point = 1.96; break
        case '0.476': point = 1.97; break
        case '0.476': point = 1.98; break
        case '0.477': point = 1.99; break
        case '0.477': point = 2.00; break
        case '0.478': point = 2.01; break
        case '0.478': point = 2.02; break
        case '0.479': point = 2.03; break
        case '0.479': point = 2.04; break
        case '0.480': point = 2.05; break
        case '0.480': point = 2.06; break
        case '0.481': point = 2.07; break
        case '0.481': point = 2.08; break
        case '0.482': point = 2.09; break
        case '0.482': point = 2.10; break
        case '0.483': point = 2.11; break
        case '0.483': point = 2.12; break
        case '0.483': point = 2.13; break
        case '0.484': point = 2.14; break
        case '0.484': point = 2.15; break
        case '0.485': point = 2.16; break
        case '0.485': point = 2.17; break
        case '0.485': point = 2.18; break
        case '0.486': point = 2.19; break
        case '0.486': point = 2.20; break
        case '0.486': point = 2.21; break
        case '0.487': point = 2.22; break
        case '0.487': point = 2.23; break
        case '0.487': point = 2.24; break
        case '0.488': point = 2.25; break
        case '0.488': point = 2.26; break
        case '0.488': point = 2.27; break
        case '0.489': point = 2.28; break
        case '0.489': point = 2.29; break
        case '0.489': point = 2.30; break
        case '0.490': point = 2.31; break
        case '0.490': point = 2.32; break
        case '0.490': point = 2.33; break
        case '0.490': point = 2.34; break
        case '0.491': point = 2.35; break
        case '0.491': point = 2.36; break
        case '0.491': point = 2.37; break
        case '0.491': point = 2.38; break
        case '0.492': point = 2.39; break
        case '0.492': point = 2.40; break
        case '0.492': point = 2.41; break
        case '0.492': point = 2.42; break
        case '0.492': point = 2.43; break
        case '0.493': point = 2.44; break
        case '0.493': point = 2.45; break
        case '0.493': point = 2.46; break
        case '0.493': point = 2.47; break
        case '0.493': point = 2.48; break
        case '0.494': point = 2.49; break
        case '0.494': point = 2.50; break
        case '0.494': point = 2.51; break
        case '0.494': point = 2.52; break
        case '0.494': point = 2.53; break
        case '0.494': point = 2.54; break
        case '0.495': point = 2.55; break
        case '0.495': point = 2.56; break
        case '0.495': point = 2.57; break
        case '0.495': point = 2.58; break
        case '0.495': point = 2.59; break
        case '0.495': point = 2.60; break
        case '0.495': point = 2.61; break
        case '0.496': point = 2.62; break
        case '0.496': point = 2.63; break
        case '0.496': point = 2.64; break
        case '0.496': point = 2.65; break
        case '0.496': point = 2.66; break
        case '0.496': point = 2.67; break
        case '0.496': point = 2.68; break
        case '0.496': point = 2.69; break
        case '0.497': point = 2.70; break
        case '0.497': point = 2.71; break
        case '0.497': point = 2.72; break
        case '0.497': point = 2.73; break
        case '0.497': point = 2.74; break
        case '0.497': point = 2.75; break
        case '0.497': point = 2.76; break
        case '0.497': point = 2.77; break
        case '0.497': point = 2.78; break
        case '0.497': point = 2.79; break
        case '0.497': point = 2.80; break
        case '0.498': point = 2.81; break
        case '0.498': point = 2.82; break
        case '0.498': point = 2.83; break
        case '0.498': point = 2.84; break
        case '0.498': point = 2.85; break
        case '0.498': point = 2.86; break
        case '0.498': point = 2.87; break
        case '0.498': point = 2.88; break
        case '0.498': point = 2.89; break
        case '0.498': point = 2.90; break
        case '0.498': point = 2.91; break
        case '0.498': point = 2.92; break
        case '0.498': point = 2.93; break
        case '0.498': point = 2.94; break
        case '0.498': point = 2.95; break
        case '0.498': point = 2.96; break
        case '0.499': point = 2.97; break
        case '0.499': point = 2.98; break
        case '0.499': point = 2.99; break
        case '0.499': point = 3.00; break
        case '0.499': point = 3.01; break
        case '0.499': point = 3.02; break
        case '0.499': point = 3.03; break
        case '0.499': point = 3.04; break
        case '0.499': point = 3.05; break
        case '0.499': point = 3.06; break
        case '0.499': point = 3.07; break
        case '0.499': point = 3.08; break
        case '0.499': point = 3.09; break
        case '0.499': point = 3.10; break
        case '0.499': point = 3.11; break
        case '0.499': point = 3.12; break
        case '0.499': point = 3.13; break
        case '0.499': point = 3.14; break
        case '0.499': point = 3.15; break
        case '0.499': point = 3.16; break
        case '0.499': point = 3.17; break
        case '0.499': point = 3.18; break
        case '0.499': point = 3.19; break
        case '0.499': point = 3.20; break
        case '0.499': point = 3.21; break
        case '0.499': point = 3.22; break
        case '0.499': point = 3.23; break
        case '0.499': point = 3.24; break
        case '0.499': point = 3.25; break
        case '0.499': point = 3.26; break
        case '0.499': point = 3.27; break
        case '0.499': point = 3.28; break
        case '0.499': point = 3.29; break
        case '0.500': point = 3.30; break
        case '0.500': point = 3.31; break
        case '0.500': point = 3.32; break
        case '0.500': point = 3.33; break
        case '0.500': point = 3.34; break
        case '0.500': point = 3.35; break
        case '0.500': point = 3.36; break
        case '0.500': point = 3.37; break
        case '0.500': point = 3.38; break
        case '0.500': point = 3.39; break
        case '0.500': point = 3.40; break
        case '0.500': point = 3.41; break
        case '0.500': point = 3.42; break
        case '0.500': point = 3.43; break
        case '0.500': point = 3.44; break
        case '0.500': point = 3.45; break
        case '0.500': point = 3.46; break
        case '0.500': point = 3.47; break
        case '0.500': point = 3.48; break
        case '0.500': point = 3.49; break
        case '0.500': point = 3.50; break
        case '0.500': point = 3.51; break
        case '0.500': point = 3.52; break
        case '0.500': point = 3.53; break
        case '0.500': point = 3.54; break
        case '0.500': point = 3.55; break
        case '0.500': point = 3.56; break
        case '0.500': point = 3.57; break
        case '0.500': point = 3.58; break
        case '0.500': point = 3.59; break
        case '0.500': point = 3.60; break
        case '0.500': point = 3.61; break
        case '0.500': point = 3.62; break
        case '0.500': point = 3.63; break
        case '0.500': point = 3.64; break
        case '0.500': point = 3.65; break
        case '0.500': point = 3.66; break
        case '0.500': point = 3.67; break
        case '0.500': point = 3.68; break
        case '0.500': point = 3.69; break
        case '0.500': point = 3.70; break
        case '0.500': point = 3.71; break
        case '0.500': point = 3.72; break
        case '0.500': point = 3.73; break
        case '0.500': point = 3.74; break
        case '0.500': point = 3.75; break
        case '0.500': point = 3.76; break
        case '0.500': point = 3.77; break
        case '0.500': point = 3.78; break
        case '0.500': point = 3.79; break
        case '0.500': point = 3.80; break
        case '0.500': point = 3.81; break
        case '0.500': point = 3.82; break
        case '0.500': point = 3.83; break
        case '0.500': point = 3.84; break
        case '0.500': point = 3.85; break
        case '0.500': point = 3.86; break
        case '0.500': point = 3.87; break
        case '0.500': point = 3.88; break
        case '0.500': point = 3.89; break
        case '0.500': point = 3.90; break
        case '0.500': point = 3.91; break
        case '0.500': point = 3.92; break
        case '0.500': point = 3.93; break
        case '0.500': point = 3.94; break
        case '0.500': point = 3.95; break
        case '0.500': point = 3.96; break
        case '0.500': point = 3.97; break
        case '0.500': point = 3.98; break
        case '0.500': point = 3.99; break
        case '0.500': point = 4.00; break
        case '0.500': point = 4.01; break
        case '0.500': point = 4.02; break
        case '0.500': point = 4.03; break
        case '0.500': point = 4.04; break
        case '0.500': point = 4.05; break
        case '0.500': point = 4.06; break
        case '0.500': point = 4.07; break
        case '0.500': point = 4.08; break
        case '0.500': point = 4.09; break
        case '0.500': point = 4.10; break
        case '0.500': point = 4.11; break
        case '0.500': point = 4.12; break
        case '0.500': point = 4.13; break
        case '0.500': point = 4.14; break
        case '0.500': point = 4.15; break
        case '0.500': point = 4.16; break
        case '0.500': point = 4.17; break
        case '0.500': point = 4.18; break
        case '0.500': point = 4.19; break
        case '0.500': point = 4.20; break
        case '0.500': point = 4.21; break
        case '0.500': point = 4.22; break
        case '0.500': point = 4.23; break
        case '0.500': point = 4.24; break
        case '0.500': point = 4.25; break
        case '0.500': point = 4.26; break
        case '0.500': point = 4.27; break
        case '0.500': point = 4.28; break
        case '0.500': point = 4.29; break
        case '0.500': point = 4.30; break
        case '0.500': point = 4.31; break
        case '0.500': point = 4.32; break
        case '0.500': point = 4.33; break
        case '0.500': point = 4.34; break
        case '0.500': point = 4.35; break
        case '0.500': point = 4.36; break
        case '0.500': point = 4.37; break
        case '0.500': point = 4.38; break
        case '0.500': point = 4.39; break
        case '0.500': point = 4.40; break
        case '0.500': point = 4.41; break
        case '0.500': point = 4.42; break
        case '0.500': point = 4.43; break
        case '0.500': point = 4.44; break
        case '0.500': point = 4.45; break
        case '0.500': point = 4.46; break
        case '0.500': point = 4.47; break
        case '0.500': point = 4.48; break
        case '0.500': point = 4.49; break
        case '0.500': point = 4.50; break
        case '0.500': point = 4.51; break
        case '0.500': point = 4.52; break
        case '0.500': point = 4.53; break
        case '0.500': point = 4.54; break
        case '0.500': point = 4.55; break
        case '0.500': point = 4.56; break
        case '0.500': point = 4.57; break
        case '0.500': point = 4.58; break
        case '0.500': point = 4.59; break
        case '0.500': point = 4.60; break
        case '0.500': point = 4.61; break
        case '0.500': point = 4.62; break
        case '0.500': point = 4.63; break
        case '0.500': point = 4.64; break
        case '0.500': point = 4.65; break
        case '0.500': point = 4.66; break
        case '0.500': point = 4.67; break
        case '0.500': point = 4.68; break
        case '0.500': point = 4.69; break
        case '0.500': point = 4.70; break
        case '0.500': point = 4.71; break
        case '0.500': point = 4.72; break
        case '0.500': point = 4.73; break
        case '0.500': point = 4.74; break
        case '0.500': point = 4.75; break
        case '0.500': point = 4.76; break
        case '0.500': point = 4.77; break
        case '0.500': point = 4.78; break
        case '0.500': point = 4.79; break
        case '0.500': point = 4.80; break
        case '0.500': point = 4.81; break
        case '0.500': point = 4.82; break
        case '0.500': point = 4.83; break
        case '0.500': point = 4.84; break
        case '0.500': point = 4.85; break
        case '0.500': point = 4.86; break
        case '0.500': point = 4.87; break
        case '0.500': point = 4.88; break
        case '0.500': point = 4.89; break
        case '0.500': point = 4.90; break
        case '0.500': point = 4.91; break
        case '0.500': point = 4.92; break
        case '0.500': point = 4.93; break
        case '0.500': point = 4.94; break
        case '0.500': point = 4.95; break
        case '0.500': point = 4.96; break
        case '0.500': point = 4.97; break
        case '0.500': point = 4.98; break
        case '0.500': point = 4.99; break
        case '0.500': point = 5.00; break
    }

    return point
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
}

var start = 360.8
var end = 361.8
var value = getRandomInt(1, 50)
var extraItervals = 0

var start2 = 0.308
var end2 = 1.308
var value2 = getRandomInt(1, 50)
var extraItervals2 = 0

var intervals = []
var values = []

var intervals2 = []
var values2 = []

function myAddInterval(){
    extraItervals++
    let newInterval = `<tr  id="interval` + extraItervals+ `">
                    <td><input type="text" id="start" value='`+ start + `'></td>
                    <td><input type="text" id='end' value='` + end + `'></td>
                    <td><input type="text" id="value" value='` + value + `'></td>
                </tr> `
    
    document.querySelector('#table').innerHTML += newInterval

    start++
    end++
    value = getRandomInt(1, 30)
}

function myDelInterval(){
    if(!extraItervals) return

    document.querySelector('#interval' + extraItervals).remove()
    start--
    end--
    extraItervals--
}

function myAddInterval2(){
    extraItervals2++
    let newInterval = `<tr  id="interval` + extraItervals2+ `">
                    <td><input type="text" id="start" value='`+ start2 + `'></td>
                    <td><input type="text" id='end' value='` + end2 + `'></td>
                    <td><input type="text" id="value" value='` + value2 + `'></td>
                </tr> `
    
    document.querySelector('#table2').innerHTML += newInterval

    start2++
    end2++
    value2 = getRandomInt(1, 30)
}

function myDelInterval2(){
    if(!extraItervals2) return

    document.querySelector('#interval' + extraItervals2).remove()
    start2--
    end2--
    extraItervals2--
}

function series(){
    let temp = 0
    let res = []
    for(let i = 0; i < values.length; i++)
        temp += values[i]
    
    for(let i = 0; i < values.length; i++)
        res.push(values[i] / temp)
    
    return res
}

function method_parabol(func ,a, b, n) {
    let h=(b-a)/n;
    let k=0.0;
    let x=a + h
    for (let i = 1; i < n/2 + 1; i++) {
      k += 4*func(x);
      x += 2*h;
    }

    x = a + 2*h;
    for(let i = 1; i < n/2; i++) {
        k += 2*func(x)
        x += 2*h
    }
    return (h/3)*(func(a)+func(b)+k)
}

function func (z) {
    return Math.E ** (-1 * z ** 2 / 2);
}

function laplase(x) {
    return (1 / Math.sqrt(2 * Math.PI)) * method_parabol(func, 0.0, x, 500) 
}

function data(val, interv){
    let size = 0
    let tempArr = []
    let temp = 0

    for(let i = 0; i < val.length; i++)
        tempArr.push(interv[1][i] - (interv[1][i]-interv[0][i]) / 2)

    for(let i = 0; i <val.length; i++)
        size += val[i]

    let temp1 = 0;

    for(let i = 0; i < val.length; i++)
        temp1 += tempArr[i] * val[i]
    
    let average = temp1 / size

    let standartDeviation = 0
    let selectiveVariance = 0

    for (let i = 0; i < tempArr.length; i++) 
        temp += val[i] * (tempArr[i] - average) ** 2
    selectiveVariance = temp / size
    standartDeviation = Math.sqrt(selectiveVariance)

    return {
        size: size,
        sample: tempArr,
        average: average,
        standartDeviation: standartDeviation,
        selectiveVariance: selectiveVariance
    }
}

function table1(){
    let res = []
    res.push([])
    res.push([])
    let size = 0
    let tempArr = []
    let temp = 0
    for(let i = 0; i < 10; i++)
        res[0].push([])
    for(let i = 0; i <values.length; i++){
        res[0][i][0] = intervals[0][i]
        res[0][i][1] = intervals[1][i]
        res[0][i][2] = values[i]
    }

    for(let i = 0; i <values.length; i++)
        tempArr.push(intervals[1][i] - (intervals[1][i]-intervals[0][i]) / 2)

    for(let i = 0; i <values.length; i++)
        size += values[i]

    let temp1 = 0;

    for(let i = 0; i <values.length; i++)
        temp1 += tempArr[i] * values[i]
    
    let average = temp1 / size

    let standartDeviation = 0
    let selectiveVariance = 0

    for (let i = 0; i < tempArr.length; i++) 
        temp += values[i] * (tempArr[i] - average) ** 2
    selectiveVariance = temp / size
    standartDeviation = Math.sqrt(selectiveVariance)


    let theorFreqs = []
    let hitChances = []

    for (let i = 0; i < tempArr.length; i++) {
        let f0 = laplase((intervals[0][i] - average) / standartDeviation)
        let f1 = laplase((intervals[1][i] - average) / standartDeviation)

        theorFreqs.push(math.abs(f0 - f1) * size)
        hitChances.push(math.abs(f0 - f1))

    }
    
    
    let array = calcs1(size, average, standartDeviation)

    for(let i = 0, j = 0; i <values.length; i++, j += 7){
        res[0][i][3] = array['res'][j]
        res[0][i][4] = array['res'][j + 1]
        res[0][i][5] = array['res'][j + 2]
        res[0][i][6] = array['res'][j + 3]
        res[0][i][7] = array['res'][j + 4]
        res[0][i][8] = array['res'][j + 5]
        res[0][i][9] = array['res'][j + 6]
    }


    res[1].push(array['h0'])
    res[1].push(array['numbers']['degreeOfFreedom'])
    res[1].push(array['numbers']['observedValue'])
    res[1].push(array['numbers']['criticalPoint'])
    
    return res
}

function PirsonPoint (k) {
    let criticalPointValue = 0

    switch (k) {
        case 1: criticalPointValue = 3.84; break
        case 2: criticalPointValue = 5.99; break
        case 3: criticalPointValue = 7.82; break
        case 4: criticalPointValue = 9.49; break
        case 5: criticalPointValue = 11.07; break
        case 6: criticalPointValue = 12.59; break
        case 7: criticalPointValue = 14.07; break
        case 8: criticalPointValue = 15.510; break
        case 9: criticalPointValue = 16.92; break
        case 10: criticalPointValue = 18.310; break
    }

    return criticalPointValue
}

function calcs1(size, average, standartDeviation){
    let res = []
    let observedValue = 0
    
    for (let i = 0; i < values.length; i++) {
        let xi = intervals[0][i]
        let xiNext = intervals[1][i]
        let ni = values[i]

        let x1 = (xi - average) / standartDeviation
        let x2 = (xiNext - average) / standartDeviation

        let x1Sign = false
        let x2Sign = false

        if(x1 < 0){
            x1 = -x1
            x1Sign = true
        }

        if(x2 < 0){
            x2 = -x2
            x2Sign = true
        }

        let f1 = laplase(x1)
        let f2 = laplase(x2)

        if(x1Sign) f1 = -f1
        if(x2Sign) f2 = -f2

        let pi = f2 - f1
        let niS = size * pi
        let ki = ((ni - niS) ** 2) / niS

        res.push(x1, x2, f1, f2, pi, niS, ki)
        observedValue += ki
    }
    let k = values.length - 3
    let criticalPoint = PirsonPoint(k)


    return {
        h0: observedValue < criticalPoint, 
        res,
        numbers: {
            observedValue,
            criticalPoint,
            degreeOfFreedom: k
        }
    
    }
}

function task1(){
    let res = ''
    let namesIntervals = []

    res += '<h2>Task 1 - Pirson\'s test</h2>'
    res += '<label>Interval statistical series:</label>'

    res += '<table>'
    res += '<tr>'
    for(let i = 0; i < intervals[0].length; i++){
        res += '<td>[' + intervals[0][i] + ', ' + intervals[1][i] + ')</td>'
        namesIntervals.push('[' + intervals[0][i] + ', ' + intervals[1][i] + ')')
    }
    res += '</tr>'

    res += '<tr>'
    for(let i = 0; i < intervals[0].length; i++)
        res += '<td>' + values[i] + '</td>'
    res += '</tr>'

    res += '<tr>'
    for(let i = 0; i < intervals[0].length; i++)
        res += '<td>' + series()[i] + '</td>'
    res += '</tr>'
    res += '</table>'
    document.querySelector('#task1').innerHTML = res
    res = ''


    document.querySelector('#task1').innerHTML += '<canvas id="chart" width="60" height="40">'

    setTimeout(() => {
        new Chart(document.querySelector('#chart').getContext('2d'), {
            type: 'bar',
            responsive: false,
            maintainAspectRatio: false,
            data: {
                labels: namesIntervals,
                datasets: [{
                    label: '',
                    backgroundColor: 'rgb(48, 92, 100)',
                    borderColor: 'rgb(48, 92, 100)',
                    data:values
                }]
            }
        })
    }, 0)

    res += '<br><label>Hypothesis:</label><br>'
    res += '<label>H0: ' + table1()[1][0] + '</label><br>' 


    res += '<label>Iteration table:</label>'
    res += '<table>'

    res += '<tr>'
    res += '<td>Xi</td>' + '<td>Xi+1</td>' + '<td>ni</td>' + '<td>x1</td>' + '<td>x2</td>'
        + '<td>F(x1)</td>' + '<td>F(x2)</td>' + '<td>pi</td>' + '<td>ni\'</td>' + '<td>Ki\'</td>'
    res += '</tr>'

    
    for(let i = 0; i < intervals[0].length; i++){
    res += '<tr>'
        for(let j = 0; j < 10; j++)
            res += '<td>' + table1()[0][i][j] + '</td>'
    res += '</tr>'
    }
    
    res += '</table>'

    res += '<label>Power of freedom: ' + table1()[1][1] + '</label>'
    res += '<label>Observed value P: ' + table1()[1][2] + '</label>'
    res += '<label>Critical point p: ' + table1()[1][3] + '</label>'

    document.querySelector('#task1').innerHTML += res
}

function calcs2(){
    let res = []
 
    let data1 = data(values, intervals)
    let data2 = data(values2, intervals2)

    let observedValue = 0
    let degreeOfFreedom1 = 0
    let degreeOfFreedom2 = 0

    if(data1['selectiveVariance'] > data2['selectiveVariance']){
        observedValue = Math.abs(data1['selectiveVariance'] / data2['selectiveVariance'])
        degreeOfFreedom1 = values.length - 1
        degreeOfFreedom2 = values2.length - 1
    } else {
        observedValue = Math.abs(data2['selectiveVariance'] / data1['selectiveVariance'])
        degreeOfFreedom1 = values2.length - 1
        degreeOfFreedom2 = values.length - 1
    }
    let criticalPoint = forFisher(degreeOfFreedom1, degreeOfFreedom2)

    res.push(observedValue < criticalPoint)
    res.push(degreeOfFreedom1)
    res.push(degreeOfFreedom2)
    res.push(data1['selectiveVariance'])
    res.push(data2['selectiveVariance'])
    res.push(observedValue)
    res.push(criticalPoint)
    
    
    return res
}

function task2(){
    let res = ''

    res += '<h2>Task 2 - Fisher\'s test</h2>'
    res += '<label>Hypothesis:</label>'
    res += '<label>H0: ' + calcs2()[0] + '</label>'
    res += '<label>Power of freedom 1: ' + calcs2()[1] + '</label>'
    res += '<label>Power of freedom 2: ' + calcs2()[2] + '</label>'
    res += '<label>Variance 1: ' + calcs2()[3] + '</label>'
    res += '<label>Variance 2: ' + calcs2()[4] + '</label>'
    res += '<label>Observed value F: ' + calcs2()[5] + '</label>'
    res += '<label>Critical point f: ' + calcs2()[6] + '</label>'

    document.querySelector('#task2').innerHTML = res
    
}


function calcs3(){
    let res = []

    let data1 = data(values, intervals)
    let data2 = data(values2, intervals2)

    let degreeOfFreedom = values.length + values2.length - 2

    let testT = Math.abs(data1['average'] - data2['average']) / 
    Math.sqrt((values.length * data1['selectiveVariance'] + values2.length * data2['selectiveVariance']) / degreeOfFreedom * 
    (1 / values.length + 1 / values2.length))  

    let CriticalPointT = criticalPointT(degreeOfFreedom)

    let testZ =  Math.abs(data1['average'] - data2['average']) /  
    Math.sqrt((data1['selectiveVariance'] / values.length) + (data2['selectiveVariance'] / values2.length))

    let CriticalPointZ = laplaceIntegralReversed((1 - 0.05) / 2)

    res.push(testZ < CriticalPointZ)
    res.push(testT < CriticalPointT)

    res.push(testZ)
    res.push(testT)
    res.push(CriticalPointZ)
    res.push(CriticalPointT)

    return res
}

function task3(){
    let res = ''

    res += '<h2>Task 3 - Student\'s test</h2>'
    res += '<label>Hypothesis:</label>'
    res += '<label>H0 (Z-test): ' + calcs3()[0] + '</label>'
    res += '<label>H0 (T-test): ' + calcs3()[1] + '</label>'
    res += '<label>Observed value |Z|: ' + calcs3()[2] + '</label>'
    res += '<label>Observed value |T|: ' + calcs3()[3] + '</label>'
    res += '<label>Critical point z: ' + calcs3()[4] + '</label>'
    res += '<label>Critical point t: ' + calcs3()[5] + '</label>'


    document.querySelector('#task3').innerHTML = res
}

function parseInput(){
    intervals.push([])
    intervals.push([])

    for(let i = 0; i < 8 + extraItervals; i++){
        intervals[0].push(parseFloat(document.querySelectorAll('#start')[i].value))
        intervals[1].push(parseFloat(document.querySelectorAll('#end')[i].value))
        values.push(parseFloat(document.querySelectorAll('#value')[i].value))
    }

    intervals2.push([])
    intervals2.push([])

    for(let i = 0; i < 8 + extraItervals2; i++){
        intervals2[0].push(parseFloat(document.querySelectorAll('#start2')[i].value))
        intervals2[1].push(parseFloat(document.querySelectorAll('#end2')[i].value))
        values2.push(parseFloat(document.querySelectorAll('#value2')[i].value))
    }
}

function calc(){
    parseInput()
    task1()
    task2()
    task3()
}

calc()