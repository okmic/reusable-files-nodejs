import fs from "fs/promises"

export async function storageChecked(dirPath) {
    try {
        await fs.access(dirPath)
    } catch (e) {
        await fs.mkdir(dirPath, { recursive: true })
    }
}