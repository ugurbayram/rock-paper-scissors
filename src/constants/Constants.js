export const game = [{
    id: 0,
    result: "DRAW",
    color: "#ffefd5"
}, {
    id: 1,
    result: "WIN",
    color: "#90ee90"
}, {
    id: 2,
    result: "LOSS",
    color: "#fa8072"
}]

export const weapons = [{
    id: "1",
    name: "Rock",
    active: "false"

}, {
    id: "2",
    name: "Paper",
    active: "false"
}, {
    id: "3",
    name: "Scissors",
    active: "false"
}]

export const notificationTemplates = [
    {
        title: "Mehhhh!",
        message: "",
        type: "warning",
        insert: "top",
        container: "bottom-right",
        animationIn: ["animated", "zoomIn"],
        animationOut: ["animated", "zoomOut"],
        dismiss: {
            duration: 1500,
            onScreen: false
        }
    },
    {
        title: "Yayyyy!",
        message: "",
        type: "success",
        insert: "top",
        container: "bottom-right",
        animationIn: ["animated", "zoomIn"],
        animationOut: ["animated", "zoomOut"],
        dismiss: {
            duration: 1500,
            onScreen: false
        }
    },
    {
        title: "Pufffff!",
        message: "",
        type: "danger",
        insert: "top",
        container: "bottom-right",
        animationIn: ["animated", "zoomIn"],
        animationOut: ["animated", "zoomOut"],
        dismiss: {
            duration: 1500,
            onScreen: false
        }
    }
]

export const messages =
    [[
        " You choose Rock, Computer chooses Rock. No Score, DRAW",
        " You choose Rock, Computer chooses Paper. Paper covers Rock, LOSS",
        " You choose Rock, Computer chooses Scissors. Rock breaks Scissors, WIN"
    ], [
        " You choose Paper, Computer chooses Rock. Paper covers Rock, WIN",
        " You choose Paper, Computer chooses Paper. No Score, DRAW",
        " You choose Paper, Computer chooses Scissors. Scissors cuts Paper, LOSS"
    ], [
        " You choose Scissors, Computer chooses Rock. Rock breaks Scissors, LOSS",
        " You choose Scissors, Computer chooses Paper. Scissors cuts Paper, WIN",
        " You choose Scissors, Computer chooses Scissors. No Score, DRAW"
    ]]


