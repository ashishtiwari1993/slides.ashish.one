--- 
theme: default
background: 
title: advance-rag-techniques
transition: slide-left
layover: cover
--- 

# Advanced RAG - Chunking, Retrievals & Reranking

Ashish Tiwari  
Senior Developer Advocate

<img src="/public/elastic.svg" width="100"/>

---
layout: center
---

<img src="/public/RAG-Architecture.png" class="center" />

---
layout: center
---

# Chunking

<v-clicks>

- Characters chunking

- Semantic chunking

- Token based chunking

</v-clicks>

<v-after>

And many more ...
</v-after>

---
layout: default
---
# Passage

<br>

```
Paris 2024 featured the debut of breaking as an Olympic sport, and was the final Olympic Games held during the IOC presidency of Thomas Bach. The 2024 Games were expected to cost €9 billion.
The opening ceremony was held outside of a stadium for the first time in modern Olympic history, as athletes were paraded by boat along the Seine. Paris 2024 was the first Olympics in history to reach full gender parity on the field of play, with equal numbers of male and female athletes.
The United States topped the medal table for the fourth consecutive Summer Games and 19th time overall, with 40 gold and 126 total medals. China tied with the United States on gold (40), but finished second due to having fewer silvers; the nation won 91 medals overall.
This is the first time a gold medal tie among the two most successful nations has occurred in Summer Olympic history. Japan finished third with 20 gold medals and sixth in the overall medal count.
Australia finished fourth with 18 gold medals and fifth in the overall medal count.The host nation, France, finished fifth with 16 gold and 64 total medals, and fourth in the overall medal count.
Dominica, Saint Lucia, Cape Verde and Albania won their first-ever Olympic medals, the former two both being gold, with Botswana and Guatemala also winning their first-ever gold medals. The Refugee Olympic Team also won their first-ever medal, a bronze in boxing.
At the conclusion of the games, despite some controversies throughout relating to politics, logistics and conditions in the Olympic Village, the Games were considered a success by the press, Parisians and observers.
The Paris Olympic Games broke all-time records for ticket sales, with the Games selling 9,556,792 tickets (12,132,647 in total for Paris 2024 if you add in the Paralympic Games).
In the 2024 Paris Olympics, several new events and formats have been introduced. Formula Kite made its debut, described as the "Formula One of the Olympics", featuring high-speed foil racing with separate events for men and women.
Kayak cross also debuted, where four athletes race against each other on a course with multiple gates, marking the first head-to-head race in Olympic canoe slalom history.
Sport climbing returned with a new format, splitting into bouldering and lead combined events in addition to a speed event. 3x3 basketball, which debuted in Tokyo, was back with finals scheduled for August 5 at Place de La Concorde.
Changes in other sports included the introduction of men's participation in artistic swimming, a new women's weight class in boxing, and the addition of a marathon race walk mixed relay in track and field.
A TGM Research survey shows that Coca-Cola is globally the most connected brand with the 2024 Olympics, with 23% of people mentioning it. Nike comes in second with 16%, despite not being an official sponsor of the Olympic Games.[197] Belgian beverage company AB InBev became the first Worldwide Olympic Partner during the Games,[198] while two Japanese companies will not renew their sponsorships after 2024; automobile manufacturer Toyota, with the company reportedly unhappy with how the IOC has used its sponsorship money,[199][200] and Panasonic, under continuous management considerations regarding sponsorship, with the company also looking to expand its businesses outside consumer electronics.[201][202]

Under an agreement as "Premium" sponsor reportedly valued at €150 million ($163 million), French luxury goods conglomerate LVMH has been involved in aspects of the Games, with its brand Louis Vuitton having provided the trunks used to store the Olympic torch and medals, and the outfits and trays for medal presenters.
Former IOC marketing head Michael Payne raised concerns that the prominent use of LVMH goods as part of the Olympics (and in particular, the opening ceremony, which also featured the aforementioned items as props, and performers Aya Nakamura and Lady Gaga wearing Dior haute couture) could cause conflicts with other official sponsors, noting that "the direction of stylish sponsor product placement may not be wrong but needs exceptionally careful management.
LVMH got a massive free global ad last night and other partners are all going to be asking, how did that work?
```

---
layout: default
---

# Charaters chunking

Divides the text into chunks based on a fixed number of characters.
<br>
<br>

<div class="grid grid-cols-2 gap-4">
<div>

<br>
```sh
pip install -qU langchain-text-splitters tiktoken langchain_experimental langchain_openai langchain-elasticsearch
```

<br>
```py
from langchain_text_splitters import RecursiveCharacterTextSplitter

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=100,
    chunk_overlap=2,
    length_function=len,
    is_separator_regex=False,
)

chunks = text_splitter.split_text(text)
show_chunks(chunks)
```

</div>


<div>

Chunks

```
0 Paris 2024 featured the debut of breaking as an Olympic sport, and was the final Olympic Games held
1 during the IOC presidency of Thomas Bach. The 2024 Games were expected to cost €9 billion.
2 The opening ceremony was held outside of a stadium for the first time in modern Olympic history, as
3 athletes were paraded by boat along the Seine. Paris 2024 was the first Olympics in history to
4 reach full gender parity on the field of play, with equal numbers of male and female athletes.
5 The United States topped the medal table for the fourth consecutive Summer Games and 19th time
6 overall, with 40 gold and 126 total medals. China tied with the United States on gold (40), but
7 finished second due to having fewer silvers; the nation won 91 medals overall.
8 This is the first time a gold medal tie among the two most successful nations has occurred in
9 Summer Olympic history. Japan finished third with 20 gold medals and sixth in the overall medal
10 count.
11 Australia finished fourth with 18 gold medals and fifth in the overall medal count.The host nation,
.
.
.
```


</div>
</div>

---
layout: default
---

# Token based chunking

When chunking text for a RAG pipeline, ensure the token count stays within the model's limit by using the same tokenizer as the language model to maintain accuracy.

<br>
<br>

<div class="grid grid-cols-2 gap-4">
<div>

```py
from langchain_text_splitters import RecursiveCharacterTextSplitter

text_splitter = RecursiveCharacterTextSplitter.from_tiktoken_encoder(
    model_name="gpt-4",
    chunk_size=100,
    chunk_overlap=0,
)

chunks = text_splitter.split_text(text)
show_chunks(chunks)
```

</div>

<div>

Chunks

```
0 Paris 2024 featured the debut of breaking as an Olympic sport, and was the final Olympic Games held during the IOC presidency of Thomas Bach. The 2024 Games were expected to cost €9 billion.
1 The opening ceremony was held outside of a stadium for the first time in modern Olympic history, as athletes were paraded by boat along the Seine. Paris 2024 was the first Olympics in history to reach full gender parity on the field of play, with equal numbers of male and female athletes.
2 The United States topped the medal table for the fourth consecutive Summer Games and 19th time overall, with 40 gold and 126 total medals. China tied with the United States on gold (40), but finished second due to having fewer silvers; the nation won 91 medals overall.
This is the first time a gold medal tie among the two most successful nations has occurred in Summer Olympic history. Japan finished third with 20 gold medals and sixth in the overall medal count.
3 Australia finished fourth with 18 gold medals and fifth in the overall medal count.The host nation, France, finished fifth with 16 gold and 64 total medals, and fourth in the overall medal count. 
Dominica, Saint Lucia, Cape Verde and Albania won their first-ever Olympic medals, the former two both being gold, with Botswana and Guatemala also winning their first-ever gold medals. The Refugee Olympic Team also won their first-ever medal, a bronze in boxing.
4 At the conclusion of the games, despite some controversies throughout relating to politics, logistics and conditions in the Olympic Village, the Games were considered a success by the press, Parisians and observers.
The Paris Olympic Games broke all-time records for ticket sales, with the Games selling 9,556,792 tickets (12,132,647 in total for Paris 2024 if you add in the Paralympic Games)
```

</div>
</div>


---
layout: default
---

# Semantic chunking

Divides the text into semantic chunks using LLMs.
<br>
<br>

<div class="grid grid-cols-2 gap-4">
<div>

```py
from langchain_experimental.text_splitter import SemanticChunker
from langchain_openai.embeddings import OpenAIEmbeddings

os.environ["OPENAI_API_KEY"] = userdata.get('OPENAI_API_KEY')

text_splitter = SemanticChunker(OpenAIEmbeddings(), breakpoint_threshold_type="interquartile")

chunks = text_splitter.split_text(text)
show_chunks(chunks)
```

</div>

<div>

Chunks

```
0 Paris 2024 featured the debut of breaking as an Olympic sport, and was the final Olympic Games held during the IOC presidency of Thomas Bach. The 2024 Games were expected to cost €9 billion. The opening ceremony was held outside of a stadium for the first time in modern Olympic history, as athletes were paraded by boat along the Seine. Paris 2024 was the first Olympics in history to reach full gender parity on the field of play, with equal numbers of male and female athletes. The United States topped the medal table for the fourth consecutive Summer Games and 19th time overall, with 40 gold and 126 total medals.
1 China tied with the United States on gold (40), but finished second due to having fewer silvers; the nation won 91 medals overall. This is the first time a gold medal tie among the two most successful nations has occurred in Summer Olympic history. Japan finished third with 20 gold medals and sixth in the overall medal count. Australia finished fourth with 18 gold medals and fifth in the overall medal count.The host nation, France, finished fifth with 16 gold and 64 total medals, and fourth in the overall medal count. Dominica, Saint Lucia, Cape Verde and Albania won their first-ever Olympic medals, the former two both being gold, with Botswana and Guatemala also winning their first-ever gold medals.
2 The Refugee Olympic Team also won their first-ever medal, a bronze in boxing.
3 At the conclusion of the games, despite some controversies throughout relating to politics, logistics and conditions in the Olympic Village, the Games were considered a success by the press, Parisians and observers. The Paris Olympic Games broke all-time records for ticket sales, with the Games selling 9,556,792 tickets (12,132,647 in total for Paris 2024 if you add in the Paralympic Games). 
```

</div>
</div>


---
layout: center
---

# Information Retrieval(IR)

<v-clicks>

- Lexical / full-text 101

- Semantical 101

- Hybrid 101

</v-clicks>

---
layout: default
---

# Lexical / full-text 101

<br>

<div class="grid grid-cols-2 gap-4">
<div>

<v-clicks>

- Term based search

- Tokenizer, analyzer + Inverted Index

- Decade of research and optimizations

- Hand tuned by human


</v-clicks>

<br>

<v-clicks>

_Sample documents_

Doc 0: The quick brown fox jumps over the lazy dog

Doc 1: Dogs can jump dogs

</v-clicks>

</div>

<div>

<v-click>

__Inverted Index__

| TERM | DOC FREQ | POSTING, doc_id : term_freq : [term_pos] ...|
|------|----------|------------------------|
| brown | 1 | 0 : [1] : [39-42] |
| jump | 2 | 0,1 ...|
| brown | 1 | 0 ...|
| dog | 2 | 0,1 ... |


</v-click>
</div>
</div>


---
layout: default
---

# Semantical 101

<br>

<div class="grid grid-cols-2 gap-4">
<div>

<v-clicks>

- "Meaning" search

- Just a model + index

- Decade of research and optimizations

- Hand tuned by Maching

- Approximation

- text/audio/images ---> __Model__ ---> [0.23, 0.46, ...]

</v-clicks>


<v-clicks>

_Sample documents_

Doc 0: The quick brown fox jumps over the lazy dog

Doc 1: Dogs can jump dogs

</v-clicks>

</div>

<div>

<v-click>

__Inverted Index__

| vector ordinal | vector |
|----------------|--------|
| 0 | [0.43, 1.23, 0,78 ...] |
.
.
</v-click>
</div>
</div>

---
layout: default
---

# Hybrid 101 

<div class="grid grid-cols-2 gap-4">
<div>

```json {0-1|1-6|6-13|16-24|all}
GET olympic-2024/_search
{
  "retriever": {
    "rrf": {
      "retrievers": [
        {
          "standard": {
            "query": {
              "match": {
                "text": "total expense"
              }
            }
          }
        },
        {
          "standard": {
            "query": {
              "sparse_vector": {
                "field": "vectors",
                "inference_id": "elser-inference",
                "query": "total expense"
              }
            }
          }
        }
      ]
    }
  }
}
```
</div>
<div>

Hybrid search using Retrievers (Full text + ELSER / KNN)

<v-clicks>

- Combined Score

- RRF

- Retrievers

</v-clicks>

</div>
</div>

---
layout: center
---

# Reranking

<v-clicks depth=2>

- Re-rank the BM25 / Lexical query results

- Re-rank the Semantic results 

- Re-ranking model support

    - Google Vertex AI inference endpoint
    - Cohere Rerank inference endpoint


</v-clicks>

---
layout: default
---

<div class="grid grid-cols-2 gap-4">
<div>

# Create Inference endpoint

```json
PUT _inference/rerank/cohere-rerank
{
    "service": "cohere",
    "service_settings": {
        "api_key": "<api_key>",
        "model_id": "rerank-english-v3.0"
    },
    "task_settings": {
        "top_n": 10,
        "return_documents": true
    }
}
```

</div>

<div>

# Reranking with Elasticsearch Query

```json
GET olympic-2024/_search
{
  "retriever": {
    "text_similarity_reranker": {
      "retriever": {
        "standard": {
          "query": {
            "sparse_vector": {
              "field": "vectors",
              "inference_id": "elser-inference",
              "query": "how expensive olympic was"
            }
          }
        }
      },
      "field": "text",
      "inference_id": "cohere-rerank",
      "inference_text": "how expensive olympic was"
    }
  }
}
```

</div>
</div>

---
layout: default
---

# Resources

|   |   |
|---|---------|
| Slides | [slides.ashish.one/advance-rag](https://slides.ashish.one/advance-rag) |
| Chunking strategy | [Notebook](https://github.com/ashishtiwari1993/langchain-elasticsearch-RAG/blob/main/langchain_chunking_strategies.ipynb) |
| Reranking | https://www.elastic.co/search-labs/blog/semantic-reranking-with-retrievers | 
| LangChain TextSplitter | https://python.langchain.com/docs/concepts/#text-splitters |
| Hybrid Search | https://www.elastic.co/search-labs/tutorials/search-tutorial/semantic-search/hybrid-search |

---
src: end.md
---
