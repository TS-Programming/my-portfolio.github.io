export const about: string = `Kickback is a top-down arcade shooter I made with fellow developer Luke Harvey in Unity for a game jam. It wasn't a competition, but we wanted to challenge ourselves to make a game in a short amount of time. We spent Friday night designing and completed the core concepts the following weekend. The game ended up being really fun, so I spent the next couple weeks adding features like new enemies and online leaderboards, polishing graphics and UI, and implementing an object pooling system.`;

export const objectPoolIntro: string = `An object pool is a system of reusing cached objects instead of repeatedly creating and destroying them. There are two reasons objects pools are crucial for performance in a game like Kickback. First of all, creating and destroying objects is expensive, especially when some of the objects can be shattered into dozens of pieces like the meteors, mines, and satellites in Kickback. Secondly, the game is so fast-paced that thosuands of objects would be created and destroyed during one game. In Unity, this would lead to garbage collection issues over time. Thanks to the object pool, much fewer objects are created and they are not needed to be destroyed at all`;

export const awakeAndStartIntro: string = `The code below executes during the Unity's scene loading protocol. First Awake() is called, defining the static ObjectPool Instance which can be referenced from any script. Then, in Start(), the object pools and cached objects are created.`;

export const awakeAndStart: string = `
// This
public static ObjectPool Instance;

[System.Serializable]
public struct PoolItem
{
    public GameObject objectToPool;
    public int amountToPool;
}

// List of objects to pool (set in inspector)
public List<PoolItem> itemsToPool;

// Key: object name, Value: list of objects in the pool
public Dictionary<string, List<GameObject>> pooledObjects;

// Key: object name, Value: amount to pool
private Dictionary<string, int> poolAmountLookup;

private void Awake() 
{ 
    // Singleton pattern
    if (Instance != null && Instance != this) 
        Destroy(gameObject);
    else 
        Instance = this; 
}

void Start()
{
    pooledObjects = new Dictionary<string, List<GameObject>>();
    poolAmountLookup = new Dictionary<string, int>();

    // Store the amount to pool in a lookup Dictionary for easy access later
    foreach (var item in itemsToPool)
    {
        poolAmountLookup[item.objectToPool.name] = item.amountToPool;
    }

    // Create the pools
    foreach (var item in itemsToPool)
    {
        // Each object gets its own pool
        GameObject parentObject = new GameObject(item.objectToPool.name + " Pool");
        parentObject.transform.SetParent(transform);

        List<GameObject> pool = new List<GameObject>();

        // Instantiate the objects and add them to the pool
        for (int i = 0; i < item.amountToPool; i++)
        {
            GameObject pooledObj = Instantiate(item.objectToPool, parentObject.transform);
            pooledObj.SetActive(false);
            pooledObj.name = item.objectToPool.name + " " + i;
            pool.Add(pooledObj);
        }
        pooledObjects.Add(item.objectToPool.name, pool);
    }
}`;


export const getFromPoolIntro: string = `To get an object from the pool, you call GetPooledObject() with the name of the object you want. Provided there's an inactive object in the pool, it will be returned in an inactive state for the calling function to set properties such as position, rotation, etc. before activating it. I found it useful to have an optional parameter to return a random object from the pool, spreading out which objects are choosen to be gotten.`;

export const getFromPool: string = `
// Returns object from pool by name
public GameObject GetPooledObject(string name, bool random = false)
{
    if (pooledObjects.TryGetValue(name, out List<GameObject> pool))
    {
        // If random is true, return a random object from the pool
        if (random)
        {
            List<GameObject> inactiveObjects = pool.FindAll(obj => !obj.activeInHierarchy);
            if (inactiveObjects.Count > 0)
            {
                int randomIndex = Random.Range(0, inactiveObjects.Count);
                return inactiveObjects[randomIndex];
            }
        }
        else
        {
            for(int i = 0; i < pool.Count; i++)
            {
                if(!pool[i].activeInHierarchy)
                {
                    return pool[i];
                }
            }
        }
    }
    Debug.LogError("There are no more objects in pool or pool for " + name + " is not found");
    return null;
}
`;
export const getActiveObjectsIntro: string = `These two helper functions serve as an eloquent solution for managing the amount of objects active in the scene. We only want to have as many obsticles in the scene as is fair and fun for the player. Instead of having the EnvironmentManager script using incrementation and decrementation to keep track of the amount of objects active in the scene, we can query the object pool for the amount of active objects for a given object name and ensure its less than the maximum amount of objects allowed in the scene.`;

export const getActiveObjects: string = `
// Returns the amount of active objects in pool for a given object name
public List<GameObject> GetActiveObjectsInPool(string name)
{
    if (pooledObjects.TryGetValue(name, out List<GameObject> pool))
    {
        return pool.FindAll(obj => obj.activeInHierarchy);
    }
    Debug.LogError("No pool found for " + name);
    return null;
}

// Returns the maximum amount of pooled objects for a given object name
public int GetPoolSize(string objectName)
{
    if (poolAmountLookup.TryGetValue(objectName, out int amount))
    {
        return amount;
    }
    Debug.LogError($"No entry found for object {objectName} in pool amount lookup.");
    return 0; 
}
`;



export const returnToPoolIntro: string = `When returning an object to the pool, instead of providing the name of the object, you provide the object itself. Since the pooled opbjects are indexed, a delimiter ' ' is used to parse out the name. Also included is a time to wait parameter, which is used to delay the return to the pool. This is useful for letting animations or audio clips finish playing before returning the object.
`;

export const returnToPool: string = `
public void StartReturnToPool(GameObject obj, float timeToWait = 0f)
{
    StartCoroutine(ReturnToPool(obj, timeToWait));
}

IEnumerator ReturnToPool(GameObject obj, float timeToWait = 0f)
{
    yield return new WaitForSeconds(timeToWait);
    string name = obj.name.Split(' ')[0];
    if (pooledObjects.TryGetValue(name, out List<GameObject> pool))
    {
        obj.SetActive(false);
        if (!pool.Contains(obj))
        {
            Debug.Log("Object not in pool, adding to pool");
            pool.Add(obj);
        }
    }
    else
    {
        Debug.LogWarning("Attempted to return object to non-existent pool: " + name);
    }
}`;