export type Recorder = (fileName: string) => Promise<{ completeRecording: () => void }>

export const createRecordTest = (prefix: string, recorder: Recorder) => (
  testName: string,
  runEffect: () => Promise<any>,
) => {
  test(testName, async () => {
    const { completeRecording } = await recorder(`${prefix}-${testName}`)
    const result = await runEffect()
    completeRecording()
    return result
  })
}
