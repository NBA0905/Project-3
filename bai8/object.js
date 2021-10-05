var info = {
    ten:"BAN",
    tuoi: 16,
    ngaySinh: "09/05",
    lop: 10, 
    truong: "CNN",
    soThich: "game",
    hocTap: "Tot",
    Sat: false
}

info.Sat = true

// cach lay tu bien
console.log(info.tuoi)
console.log(info["tuoi"])

function oto(hang, nam, chu) {
    this.hang = hang
    this.nam = nam
    this.chu = chu

    return this
}
var oto1 = oto("Ford", 2010, "Hoang")