--- 
theme: default
background: 
title: Function calling
transition: slide-left
layover: cover
--- 

# Function calling - Connect ChatGPT to the Internet

Ashish Tiwari  
Senior Developer Advocate

<img src="/public/elastic.svg" width="100"/>


---
layout: two-cols-header
layoutClass: gap-30
---

# Challenges for Developers

::left::

<v-click>

# LLMs Challenges

</v-click>

<v-clicks>

- Connecting private data (RAGs, Fine tuning)

- Security and Privacy 

- <span v-mark.red="9"> Inconsistent response  </span>


</v-clicks>

::right::

<v-click>

# Common challenges

</v-click>

<v-clicks v-mark.circle.orange="8">


- Decision making on Nantural Language Query

- Executing correct componenet / code / function according to NL Query


</v-clicks>


---
src: elastic-intro.md
---

---
layout: intro
---

# Function calling
<img src="/public/openai.svg"  class="" width="250"/>

<br>
<br>

<v-click>
Function calling in OpenAI refers to the capability of AI models to interact with external functions or APIs, allowing them to perform tasks beyond text generation.


</v-click>

<br>
<br>


<v-clicks>

- `fetch_from_elasticsearch(nl_query)`
- `weather_report(latitude, longitude)`

</v-clicks>

---
layout: default
---

## `fetch_from_elasticsearch(nl_query)`:

<br>

- Accepts query in natural language (e.g. Average delay time of flights going to India?)  
- Convert Query into Elasticsearch Query DSL  
- Exectute Query on Index

````md magic-move
```python
def fetch_from_elasticsearch(nl_query):

    query_dsl = build_query(nl_query)

    # Exectue query_dsl on Elasticsearch
    ...
    ...
    ...
    json_resp = json.dumps(resp, indent=4)

    return json_resp
```
```python
def build_query(nl_query):
    index_mapping = get_index_mapping()
    ref_document = get_ref_document()
    prompt = f"""
        Use below index mapping and reference document to build Elasticsearch query:

        Index mapping:
        {index_mapping}

        Reference elasticsearch document:
        {ref_document}

        Return single line Elasticsearch Query DSL according to index mapping for the below search query:
        {nl_query}

        few example of Query DSL
        {few_shots_prompt}
    """
```
```python
def get_index_mapping():
    
    # Query on Elasticsearch to get mapping
    ...
    ...
    ...
    mapping = json.dumps(resp, indent=4)

    return mapping
```
```python
def get_ref_document():
    
    # Query on Elasticsearch to one reference document from Index
    ...
    ...
    ...

    json_resp = json.dumps(resp["hits"]["hits"][0], indent=4)

    return json_resp
```
```json
 {
    "took": 1,
    "timed_out": false,
    "_shards": {
        .
        .
    },
    "hits": {
        .
        .
    },
    "aggregations": {
        "average_delay": {
            "value": 48.346774193548384
        }
    }
}
```
````

---
layout: default
---

## `weather_report(latitude, longitude)`

<br>

- This function returns weather report in `json`.
- Accepts parameter latitude & longitude (e.g. "12.96","77.75")
- It calls [Open-Meteo](https://open-meteo.com) API to fetch weather report.

````md magic-move
```python
def weather_report(latitude, longitude):

    url = f"""{OPEN_METEO_ENDPOINT}?latitude={latitude}&longitude={longitude}&current=temperature_2m,
           precipitation,cloud_cover,visibility,wind_speed_10m"""

    resp = requests.request("GET", url)
    resp = json.loads(resp.text)
    json_resp = json.dumps(resp, indent=4)

    return json_resp
```
```json
{
    "latitude": 19.125,
    "longitude": 72.875,
        .
        .
        .
    },
    "current": {
        "time": "2024-05-30T21:00",
        "interval": 900,
        "temperature_2m": 29.7,
        "precipitation": 0.0,
        "cloud_cover": 36,
        "visibility": 24140.0,
        "wind_speed_10m": 2.9
    }
}
```
````

---
layout: default
---

# Flow

```mermaid {scale: 0.5, alt: 'control flow'}
sequenceDiagram
    actor User
    User->>run_conversation(): last flight delayed for Mumbai? 
    run_conversation()->>gpt-4o: last flight delayed for Mumbai? 
    Note over run_conversation(),gpt-4o: Available functions:<br/> - fetch_from_elasticsearch(nl_query) <br/> - weather_report(latitude, longitude)
    gpt-4o-->>run_conversation(): fetch_from_elasticsearch()
    run_conversation()->>fetch_from_elasticsearch(): Call detected function
    fetch_from_elasticsearch()-->>run_conversation(): json response {...}
    run_conversation()->>gpt-4o: Convert json into human readable format
    gpt-4o-->>run_conversation(): The last recorded flight delayed for Mumbai was <br/> Flight RMY5P1L by Kibana Airlines. The delay was due to a NAS Delay, <br/> and the flight was delayed by 180 minutes. <br/> The flight originated from Bologna Guglielmo Marconi Airport.
    run_conversation()-->>User: The last recorded flight delayed <br/> for Mumbai was Flight RMY5P1L <br/> by Kibana Airlines. The delay was <br/> due to a NAS Delay, and the <br/> flight was delayed by 180 minutes. <br/> The flight originated from <br/> Bologna Guglielmo Marconi Airport.
```
---
layout: center
---

# Parallel function calling

Parallel function calling is the model's ability to perform multiple function calls together

Only supported by latest OpenAI models - `gpt-4o`, `gpt-4-turbo`, and `gpt-3.5-turbo`

<br>

> Query - How is the weather in Mumbai, and what about the last flight that got delayed there?

<br>


---
layout: center
---

# Demo (Notebook)
<img src="/public/function_calling_qr.png" width="300" class="center"/>


---
layout: default
---

# Function Calling Resources

| | |
| --- | --- |
| Function calling | https://platform.openai.com/docs/guides/function-calling |
| Notebook | https://github.com/elastic/elasticsearch-labs | 
| Gemini | https://ai.google.dev/gemini-api/docs/function-calling |
| Mistral | https://docs.mistral.ai/capabilities/function_calling/ |
| slides | https://slides.ashish.one/function-calling |

---
src: end.md
---
