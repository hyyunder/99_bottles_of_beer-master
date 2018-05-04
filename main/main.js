function main() {
    for (let i = 99; i > 0; i--) {
        console.log("\n    " + i + " bottles of beer on the wall, " + i + " bottles of beer.");
        if (i != 1)
            process.stdout.write("    Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.");
        else
            process.stdout.write("    Take one down and pass it around, no more bottles of beer on the wall.");
    }
    process.stdout.write("\n    No more bottles of beer on the wall, no more bottles of beer.\n" +
        "    Go to the store and buy some more, 99 bottles of beer on the wall.");
}
module.exports=main;