/**
 * Represents an api endpoint that can be / is being watched.
 */
export interface IWatchable {
    uuid: string
    name: string
    apiUrl: string
    active: boolean
    requestBody?: Record<string, any>
    requestHeaders?: Record<string, any>
}

/**
 * Represents the result of a watched api endpoint that was requested.
 */
export interface IWatchResult {
    watchable: IWatchable
    code: number
    response: string
}

export default {
    watched: [] as IWatchable[],
    watch(watchable: IWatchable) {
        this.watched.push(watchable)
        console.log(`Now watching ${watchable}.`)
    },
    toggleActive(watchable: IWatchable) {
        watchable.active = !watchable.active
        console.log(`Watchable ${watchable} has a new active state.`)
    },
    unwatch(watchable: IWatchable) {
        for (let i=0; i<this.watched.length; i++) {
            if (this.watched[i].uuid == watchable.uuid)
                this.watched.splice(i, 1)
        }
        console.log(`Unwatched ${watchable}.`)
    },
    async request() {
        const res: IWatchResult[] = []

        for (const watchable of this.watched) {
            try {
                    const result = await fetch(
                        watchable.apiUrl,
                        {
                            method: 'GET',
                            body: watchable.requestBody as BodyInit,
                            headers: watchable.requestHeaders
                        }
                    )

                    const resultText = await result.text()
        
                    res.push({
                        watchable,
                        code: result.status,
                        response: resultText
                    })
            } catch (ex) {
                res.push({
                    watchable,
                    code: 400,
                    response: 'Error: ' + ex
                })
            }

        }

        return res
    }
}