--- 
theme: default
background: 
title: elastic-opensource-again
description: Overview of Elastic's open-source evolution and community impact
layout: cover
--- 

# OpenSource journey with Elastic

Ashish Tiwari  
Senior Developer Advocate

<img src="/public/elastic.svg" width="100"/>

---
layout: center
---


# How it started

<v-clicks>

- **Started in 2012** - Elastic N.V.
- **Known for search**, but grew into multiple use cases
- **Some of the users** - Netflix, Tinder, Dream11, RedBus, Meesho ....

</v-clicks>


---
layout: center
---

# E  L  K

The ELK Stack (Elasticsearch, Logstash, Kibana) became famous within the community for **log management** and **monitoring**


<v-click>

All Elastic stack were under Apache 2.0

</v-click>

---
layout: center
---

# License Change in 2021

<v-clicks>

- Elastic made the **painful decision** to change its license in 2021  
  [https://www.elastic.co/blog/licensing-change](https://www.elastic.co/blog/licensing-change)

- Moved from Apache 2.0 to 
    - SSPL(Server Side Public License) 
    - Elastic license (ELv1, Elv2)

</v-clicks>

---
layout: center
---

# Why Change?

<v-clicks>


1. **Capitalizing on Open Source**:  
   Cloud service providers were offering Elastic's open-source software as a service without contributing back, diverting resources that could have been reinvested into the product for innovation.

2. **Misuse**:  
   Elastic experienced misuse of trademarks, attempts to splinter their community, and repackaging of their OSS products, similar to what other open-source companies faced.

3. **Maintaining openness**:  
   The license change aims to protect Elastic's investment while preserving the principles of openness, transparency, and collaboration. Restrictions mainly apply to cloud providers, not the majority of users.


</v-clicks>


---
layout: center
---

# What Changed?

<v-clicks>

- **No  change** - No impact on the overwhelming majority of our user community


- We were still **Open** ~~Source~~ and **Free**.

</v-clicks>

<v-click>
But How ?
</v-click>

---
layout: default
---

# Apache 2.0 vs SSPL vs ELv2


<div class="grid grid-cols-3 gap-4">
<v-click>
<div>


**Apache 2.0**

- Permissive

- Do what you want

- e.g. Logstash, Language clients (Elasticsearch), Other OSS

Ref - https://spdx.org/licenses/Apache-2.0.html

</div>

</v-click>
<v-click>

<div>

**SSPL**

- By MongoDB

- Extra strong copyleft

- <span v-mark="{ at: 4, color: '#ff0000', type: 'circle' }"> Share improvements, modifications & code publicly for entire service stack (including unrelated components) </span>

Ref - https://spdx.org/licenses/SSPL-1.0.html

</div>

</v-click>
<v-click>

<div>

**ELv2**

- By Elastic

- Copyright

- <span v-mark.circle="{ at: 4, color: '#ff0000', type: 'circle' }"> Code is open and accessible </span>

- Prohibition on Third-Party Hosting

- License Key Protection

- Notice and Trademark Compliance 

Ref - https://spdx.org/licenses/Elastic-2.0.html

</div>

</v-click>

</div>

---
layout: Default
---

# Myths / Misunderstandings

There was disappointment among developers due to several misunderstandings. Some of them -

<v-clicks>

- Elastic was not free. Since it became closed source, we can't use it.

    - ___We can use freely. There are large number of users who using community edition.___

- You stole the community's work.

    - ___All contributions are available on [< 7.10 branch](https://github.com/elastic/elasticsearch/tree/7.10)___ and it will be maintained forever.

- You're only a wrapper around Lucene and sell their work.

    - ___Yes, but with millions of lines of code added to develop features like cluster management, Sharding, Aggregations and much more.___

- Elastic no more supporting to OpenSource community 

    - ___but the facts are -___

</v-clicks>

---
layout: Default
---

# OpenSource contributions
<br>
<br>
<br>
<div class="grid grid-cols-2 gap-4">

<div>


<v-clicks>

- Heavy contributor to Lucene ❤️.
- Donated ECS to OpenTelemetry.
- Donated Universal profiling agent to OpenTelemetry
- In top 5 contributors to OTel.
- Logstash is available under Apache 2.0 which is being heavily use in ELK. 

</v-clicks>

<v-click>

</v-click>

</div>

<div>

<v-click>

![otel-elastic](/public/otel-elastic.png)

Ref: https://opentelemetry.devstats.cncf.io/d/5/companies-table

and much more ...

</v-click>
</div>

</div>

---
layout: default
---

## Elasticsearch and Kibana OpenSource again ❤️  (v8.16)


![elastic-opensource](/public/elastic-opensource.png)

---
layout: default
---

## Elasticsearch and Kibana OpenSource again ❤️  (v8.16)

<br>
<br>
<div class="grid grid-cols-2 gap-4">

<div>

<v-clicks>

- Why now?

- Adding AGPLv3

- Are we again going to change in the future?

</v-clicks>

<br>
<br>

<v-click>

FAQ - https://www.elastic.co/pricing/faq/licensing

</v-click>

</div>

<v-clicks>

<div>

# AGPLv3

- Strong copyleft

- OSI approved license.

- Any modifications made to the software should available publicly.   



Ref - https://spdx.org/licenses/AGPL-3.0.html


</div>

</v-clicks>
</div>

---
layout: center
---

# Elastic Gujarat Community

<img src="/public/elastic-gujarat-ug.png" width="130" class="absolute left-423px"/>

---
layout: center
---

# Thank You 

<span><carbon-logo-linkedin /> in/ashishtiwari93 </span>  
<span><carbon-logo-x /> @_ashish_tiwari </span>  

<img src="/public/linkedin.jpg" width="130" class="absolute left-423px"/>

<span class="absolute right-0.5 bottom-0.5">https://ashish.one</span>
