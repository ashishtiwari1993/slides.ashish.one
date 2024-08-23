--- 
theme: default
background: 
title: Universal profiling
transition: slide-left
layover: cover
--- 

# Elastic Universal Profiling with eBPF

Ashish Tiwari  
Senior Developer Advocate

<img src="/public/elastic.svg" width="100"/>


---
layout: center
---

![alt](https://ebpf.io/static/e293240ecccb9d506587571007c36739/ea28c/overview.webp)

[ebpf.io](https://ebpf.io)

---
layout: center
---

# BPF Compiler Collection (BCC)

github.com/iovisor/bcc

---
layout: default
---

# hello-world.py

```python
from bcc import BPF

prog = """int kprobe__sys_clone(void *ctx) {
 bpf_trace_printk("Hello, World!\\n");
 return 0;
};"""

BPF(text=prog).trace_print()
```

```sh
sudo python hello-world.py
```

Hit some commands(e.g `ls`, `date`) in another terminal session.


Output -

```sh
b'            bash-106325  [001] ....2.1 133003.319718: bpf_trace_printk: Hello, World!'
b''
b'            bash-106325  [000] ....2.1 133006.553345: bpf_trace_printk: Hello, World!'
b''
b'            bash-106325  [000] ....2.1 133009.227792: bpf_trace_printk: Hello, World!'
b''
b'            bash-106325  [001] ....2.1 133027.881426: bpf_trace_printk: Hello, World!'
```

---
layout: center
---

![bcc-tool-overview](https://github.com/iovisor/bcc/raw/master/images/bcc_tracing_tools_2019.png)

---
src: elastic-intro.md
---

---
layout: center
---

![elastic-universal-profiling](https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/blt9300e09d08ad93af/650210e5c40f773155a53cac/screenshot-universal-profiling-fleet-flamegraph.png)

---
layout: default
---

## Elastic Contributes Universal Profiling Agent to OpenTelemetry  

<br>
<br>

![otel-profiling](/public/otel-profiling.png)

<br>
<br>
<br>

[github.com/open-telemetry/community/issues/1918](https://github.com/open-telemetry/community/issues/1918)  

[github.com/open-telemetry/opentelemetry-ebpf-profiler](https://github.com/open-telemetry/opentelemetry-ebpf-profiler)

---
layout: default
---

# Resources

| | |
| --- | --- |
| eBPF | https://ebpf.io |
| BCC | https://github.com/iovisor/bcc |
| Elastic Universal Profiling | https://www.elastic.co/guide/en/observability/current/profiling-get-started.html |
| Performance monitoring | https://www.elastic.co/observability-labs/blog/elastic-universal-profiling-performance-improvements-reduced-costs  |
| Observability labs | https://www.elastic.co/observability-labs |

---
src: end.md
---
